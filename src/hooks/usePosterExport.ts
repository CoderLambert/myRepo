import { useState, useCallback } from 'react';
import {
  exportAsPNG,
  exportAsJPEG,
  exportAsPDF,
  download,
  type ExportOptions,
  type PDFExportOptions,
} from '@/utils/posterExport';

export interface UsePosterExportReturn {
  exportAsPNG: (element: HTMLElement, options?: ExportOptions) => Promise<void>;
  exportAsJPEG: (element: HTMLElement, options?: ExportOptions) => Promise<void>;
  exportAsPDF: (element: HTMLElement, options?: PDFExportOptions) => Promise<void>;
  download: (blob: Blob, filename: string) => void;
  isExporting: boolean;
  progress: number;
  error: string | null;
  clearError: () => void;
}

export function usePosterExport(): UsePosterExportReturn {
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const handleExportPNG = useCallback(
    async (element: HTMLElement, options?: ExportOptions) => {
      setIsExporting(true);
      setProgress(0);
      setError(null);

      try {
        setProgress(30);
        const blob = await exportAsPNG(element, options);
        setProgress(100);
        download(blob, options?.filename || 'poster.png');
      } catch (err) {
        setError(err instanceof Error ? err.message : '导出失败');
      } finally {
        setIsExporting(false);
        setProgress(0);
      }
    },
    []
  );

  const handleExportJPEG = useCallback(
    async (element: HTMLElement, options?: ExportOptions) => {
      setIsExporting(true);
      setProgress(0);
      setError(null);

      try {
        setProgress(30);
        const blob = await exportAsJPEG(element, options);
        setProgress(100);
        download(blob, options?.filename || 'poster.jpg');
      } catch (err) {
        setError(err instanceof Error ? err.message : '导出失败');
      } finally {
        setIsExporting(false);
        setProgress(0);
      }
    },
    []
  );

  const handleExportPDF = useCallback(
    async (element: HTMLElement, options?: PDFExportOptions) => {
      setIsExporting(true);
      setProgress(0);
      setError(null);

      try {
        setProgress(30);
        const blob = await exportAsPDF(element, options);
        setProgress(100);
        download(blob, options?.filename || 'poster.pdf');
      } catch (err) {
        setError(err instanceof Error ? err.message : '导出失败');
      } finally {
        setIsExporting(false);
        setProgress(0);
      }
    },
    []
  );

  return {
    exportAsPNG: handleExportPNG,
    exportAsJPEG: handleExportJPEG,
    exportAsPDF: handleExportPDF,
    download,
    isExporting,
    progress,
    error,
    clearError,
  };
}

export default usePosterExport;
