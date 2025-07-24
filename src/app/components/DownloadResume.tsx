'use client';

import { saveAs } from 'file-saver';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DownloadResume() {
  const handleDownload = () => {
    saveAs('/assets/Aryan_Patel_Resume.pdf', 'Aryan_Patel_Resume.pdf');
  };

  return (
    <Button 
      className="bg-purple-600 hover:bg-purple-700 animate-fade-in-up"
      onClick={handleDownload}
    >
      <Download className="w-4 h-4 mr-2" />
      Download PDF
    </Button>
  );
}