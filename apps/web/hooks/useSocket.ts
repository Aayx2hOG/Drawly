import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NmExODk3My05ZDBhLTQ3OTAtYTMwMi05NTM3ZWQ5NWZiZGUiLCJpYXQiOjE3NTI3NTI0MzJ9.l6NQi49Wk0E0kShX0jI6w_eDZC7eKg5RtEDTr9idR6c`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, [])

    return { loading, socket };
}