"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./quiz.css";

const API_URL = "/api/quiz"; // ganti sesuai API / Google Apps Script

export default function QuizPage() {
  const [name, setName] = useState("");
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [qIndex, setQIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.map((q: any) => q.soal));
        setAnswers(new Array(data.length).fill(""));
      })
      .catch(err => console.error("Fetch error:", err));
  }, []);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = answer;
    setAnswers(newAnswers);

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        question: questions[qIndex],
        answer,
      }),
    }).catch(err => console.error("Post error:", err));
  };

  const characterResult = useMemo(() => {
    const counts: Record<string, number> = {
      "Sangat setuju": 0,
      Setuju: 0,
      "Kurang setuju": 0,
      "Tidak setuju": 0,
    };
    answers.forEach(a => { if (counts[a] !== undefined) counts[a]++; });

    let dominant = "Sangat setuju";
    let max = 0;
    for (const key in counts) {
      if (counts[key] > max) {
        max = counts[key];
        dominant = key;
      }
    }

    switch (dominant) {
      case "Sangat setuju": return { name: "Karakter Tidak Ramah", img: "/c4.png" };
      case "Setuju": return { name: "Karakter kurang Ramah", img: "/c3.png" };
      case "Kurang setuju": return { name: "Karakter Baik", img: "/c5.png" };
      case "Tidak setuju": return { name: "Karakter Teladan", img: "/c2.png" };
      default: return { name: "Netral", img: "/c1.png" };
    }
  }, [answers]);

  const chartData = useMemo(
    () => ["Sangat setuju", "Setuju", "Kurang setuju", "Tidak setuju"].map(k => ({
      name: k,
      total: answers.filter(a => a === k).length
    })),
    [answers]
  );

  const restartQuiz = () => {
    setName("");
    setStarted(false);
    setAnswers([]);
    setQIndex(0);
    setFinished(false);
    setQuestions([]);
  };

  return (
    <div className="quiz-container">
      {/* Header Sticky */}
      <div className="quiz-header">
        <h1 className="text-2xl sm:text-3xl font-bold judul-sejarah">
          Quiz Sedulur Gen
        </h1>
      </div>

      {/* Tahap Masukkan Nama */}
      {!started && (
        <div className="quiz-card">
          <h2 className="text-xl mb-4">Masukkan Nama Anda</h2>
          <input
            className="p-2 rounded bg-gray-100 text-black placeholder-gray-500 w-full"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nama..."
          />
          <button
            onClick={() => name && setStarted(true)}
            className="quiz-button quiz-button-primary mt-4 w-full"
          >
            Mulai Quiz
          </button>
        </div>
      )}

      {/* Tahap Pertanyaan */}
      {started && !finished && (
        <>
          <button
            onClick={() => setShowModal(true)}
            className="absolute top-4 right-4 px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            Info
          </button>

          {questions.length > 0 && (
            <div className="quiz-card">
              <h2 className="text-lg mb-4">{questions[qIndex]}</h2>
              <div className="quiz-options">
                {["Sangat setuju", "Setuju", "Kurang setuju", "Tidak setuju"].map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    className={`quiz-button ${answers[qIndex] === opt ? "quiz-button-primary" : "quiz-button-secondary"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <div className="flex justify-between">
                <button
                  disabled={qIndex === 0}
                  onClick={() => setQIndex(i => i - 1)}
                  className="quiz-button quiz-button-secondary"
                >
                  Sebelumnya
                </button>

                {qIndex < questions.length - 1 ? (
                  <button
                    onClick={() => {
                      if (!answers[qIndex]) {
                        alert("Kamu belum memilih jawaban! Silakan pilih jawaban terlebih dahulu.");
                        return;
                      }
                      setQIndex(i => i + 1);
                    }}
                    className="quiz-button quiz-button-primary"
                  >
                    Selanjutnya
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (!answers[qIndex]) {
                        alert("Kamu belum memilih jawaban! Silakan pilih jawaban terlebih dahulu.");
                        return;
                      }
                      setFinished(true);
                    }}
                    className="quiz-button quiz-button-primary"
                  >
                    Selesai
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Info Modal */}
          {showModal && (
            <div className="quiz-modal-overlay">
              <div className="quiz-modal-card">
                <h3 className="text-lg font-bold mb-2">Petunjuk Quiz</h3>
                <p className="mb-4">
                  Jawablah setiap soal dengan jujur. Gunakan tombol "Selanjutnya" untuk maju dan "Sebelumnya" untuk kembali.
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="quiz-button quiz-button-primary"
                >
                  Tutup
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Tahap Hasil */}
      {finished && (
        <div className="quiz-card">
          <h2 className="text-xl mb-4 text-center">Hasil Quiz untuk {name}</h2>
          <p className="mb-2 font-bold text-center">{characterResult.name}</p>
          <Image
            src={characterResult.img}
            alt="Karakter"
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
          <h3 className="text-lg mb-2 text-center">Grafik Jawaban</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="#000" />
              <YAxis stroke="#000" />
              <Tooltip />
              <Bar dataKey="total" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>

          <button
            onClick={restartQuiz}
            className="quiz-button quiz-button-primary mt-6 w-full"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}
