"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

export default function Cpanel() {
    const [role, setRole] = useState(null);
    const [Username, setUsername] = useState(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Ensure this only runs on the client side
        if (typeof window !== "undefined") {
            const storedRole = localStorage.getItem("role");
            const storedUsername = localStorage.getItem("Username");
            setRole(storedRole);
            setUsername(storedUsername);
            setIsMounted(true); // Ensure we only set this after mounting on the client
        }
    }, []);

    // Lazy-load components after mounting
    const Aconsle = isMounted
        ? dynamic(() => import("../components/aconsole/page"), { ssr: false, loading: () => <div>Loading Console...</div> })
        : null;

    const Uconsle = isMounted
        ? dynamic(() => import("../components/uconsle/page"), { ssr: false, loading: () => <div>Loading Console...</div> })
        : null;

    if (!isMounted) {
        return <div>Loading...</div>;
    }

    return role === "user" ? <Uconsle Username={Username} /> : <Aconsle />;
}
