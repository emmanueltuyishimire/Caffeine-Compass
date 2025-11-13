"use client";

import { useState, useEffect } from 'react';

export default function ClientDate() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    setDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  if (!date) {
    return null;
  }

  return <span>{date}</span>;
}
