"use client";

import { useState, useEffect } from 'react';

export default function ClientDate() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    // This code runs only on the client, after hydration
    setDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  // Return a placeholder on the server and initial client render
  if (!date) {
    return <span className="h-6 w-32 rounded bg-muted animate-pulse" />;
  }

  // Render the formatted date only on the client after the effect has run
  return <span>{date}</span>;
}
