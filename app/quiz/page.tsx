"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Ganti dengan link deploy Apps Script terbaru
const API_URL = "https://script.google.com/macros/s/AKfycbwFmagvk1VYqWlChPlFwEtJG1qE9baLR2bnuPcAVRTxoTo0BAalb0T_KMzX4QfLi4SlHg/exec";

export default function SedulurGen() {
  const [name, setName] = useState("");
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [qIndex, setQIndex] = useState(0);
  const [finished, setFinished] = useState(false);

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
      case "Sangat setuju": return { name: "Karakter Tegas", img: "/characters/karakter1.png" };
      case "Setuju": return { name: "Karakter Ramah", img: "/characters/karakter2.png" };
      case "Kurang setuju": return { name: "Karakter Santai", img: "/characters/karakter3.png" };
      case "Tidak setuju": return { name: "Karakter Sabar", img: "/characters/karakter4.png" };
      default: return { name: "Netral", img: "/characters/default.png" };
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

  if (!started) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-4">
        <h1 className="text-2xl mb-4">Masukkan Nama Anda</h1>
        <input
          className="p-2 rounded bg-gray-200 text-black placeholder-gray-500 w-64"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nama..."
        />
        <button
          onClick={() => name && setStarted(true)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Mulai Quiz
        </button>
      </div>
    );
  }

  if (!finished) {
    return (
      <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6">
        {questions.length > 0 ? (
          <>
            <h2 className="text-lg mb-4">{questions[qIndex]}</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {["Sangat setuju", "Setuju", "Kurang setuju", "Tidak setuju"].map(opt => (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className={`px-4 py-2 rounded border ${
                    answers[qIndex] === opt
                      ? "bg-blue-600 border-blue-400 text-white"
                      : "bg-gray-300 border-gray-400 text-black"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <button
                disabled={qIndex === 0}
                onClick={() => setQIndex(i => i - 1)}
                className="px-4 py-2 bg-gray-400 rounded disabled:opacity-50"
              >
                Sebelumnya
              </button>
              {qIndex < questions.length - 1 ? (
                <button
                  onClick={() => setQIndex(i => i + 1)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Selanjutnya
                </button>
              ) : (
                <button
                  onClick={() => setFinished(true)}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Selesai
                </button>
              )}
            </div>
          </>
        ) : (
          <p>Memuat soal...</p>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black p-6 flex flex-col items-center">
      <h2 className="text-xl mb-4">Hasil Quiz untuk {name}</h2>
      <p className="mb-2">{characterResult.name}</p>
      <Image
        src={characterResult.img}
        alt="Karakter"
        width={200}
        height={200}
        className="mb-6"
      />
      <h3 className="text-lg mb-2">Grafik Jawaban</h3>
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
        className="mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Restart Quiz
      </button>
    </div>
  );
}
