"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function AuthPage({ isSignin }: { isSignin: boolean }) {
    return <div className="w-screen h-screen flex items-center justify-center">
        <div className="p-2 m-2 rounded">
            <div className="p-2">
                <Input type="text" placeholder="email" />
            </div>
            <div className="p-2">
                <Input type="password" placeholder="password" />
            </div>
            <div className="p-2">
                <Button onClick={() => {

                }}>{isSignin ? "Sign in" : "Sign up"}</Button>
            </div>
        </div>
    </div>;
}