import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await supabase.auth.signInWithPassword({ email, password });
    window.location.href = "/admin"; // Chuyển hướng nhanh
  };

  return (
    <div className="flex h-screen items-center justify-center bg-stone-50">
      <form onSubmit={handleLogin} className="p-8 bg-white shadow-md rounded-lg space-y-4 w-96">
        <h1 className="text-2xl font-serif text-stone-800">Sơn Mài Admin</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-stone-800 text-white p-2 hover:bg-stone-700">Đăng nhập</button>
      </form>
    </div>
  );
}
