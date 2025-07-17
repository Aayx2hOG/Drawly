"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <div>
        <input style={{ padding: 10 }} value={roomId} onChange={(e) => {
          setRoomId(e.target.value);
        }} type="text" placeholder="Room Id"></input>

        <button style={{ padding: 10 }} onClick={() => {
          router.push(`/room/${roomId}`);
        }}>
          Join Room
        </button>
      </div>
    </div>
  );
}
