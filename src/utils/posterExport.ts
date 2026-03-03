import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export interface ExportOptions {
  scale?: number;
  quality?: number;
  filename?: string;
}

export interface PDFExportOptions extends ExportOptions {
  format?: 'a4' | 'a3' | 'letter' | 'custom';
  orientation?: 'portrait' | 'landscape';
  width?: number;
  height?: number;
}

/**
 * 将 HTML 元素导出为 PNG Blob
 */
export async function exportAsPNG(
  element: HTMLElement,
  options: ExportOptions = {}
): Promise<Blob> {
  const { scale = 2, quality = 1.0 } = options;

  const canvas = await html2canvas(element, {
    scale,
    backgroundColor: null,
    logging: false,
    useCORS: true,
    allowTaint: true,
    imageTimeout: 0,
  });

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to create PNG blob'));
        }
      },
      'image/png',
      quality
    );
  });
}

/**
 * 将 HTML 元素导出为 JPEG Blob
 */
export async function exportAsJPEG(
  element: HTMLElement,
  options: ExportOptions = {}
): Promise<Blob> {
  const { scale = 2, quality = 0.95 } = options;

  const canvas = await html2canvas(element, {
    scale,
    backgroundColor: '#1a1a1a',
    logging: false,
    useCORS: true,
    allowTaint: true,
    imageTimeout: 0,
  });

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to create JPEG blob'));
        }
      },
      'image/jpeg',
      quality
    );
  });
}

/**
 * 将 HTML 元素导出为 PDF Blob
 */
export async function exportAsPDF(
  element: HTMLElement,
  options: PDFExportOptions = {}
): Promise<Blob> {
  const {
    scale = 2,
    format = 'a4',
    orientation = 'portrait',
    width,
    height,
  } = options;

  const canvas = await html2canvas(element, {
    scale,
    backgroundColor: null,
    logging: false,
    useCORS: true,
    allowTaint: true,
    imageTimeout: 0,
  });

  const imgData = canvas.toDataURL('image/png', 1.0);

  // 创建 PDF
  const pdf = new jsPDF({
    orientation,
    unit: 'mm',
    format: format === 'custom' ? [width || 210, height || 297] : format,
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  // 添加图片到 PDF
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

  return pdf.output('blob');
}

/**
 * 触发文件下载
 */
export function download(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * 获取元素尺寸
 */
export function getElementDimensions(element: HTMLElement): {
  width: number;
  height: number;
} {
  const rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
  };
}
