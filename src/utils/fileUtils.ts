// utils/fileUtils.ts
export function getFileType(fileName: string): string {
    const extension = fileName.split('.').pop()?.toLowerCase();
    const typeMap: { [key: string]: string } = {
      png: 'Image',
      jpg: 'Image',
      jpeg: 'Image',
      pdf: 'PDF',
      csv: 'CSV',
      json: 'JSON',
      txt: 'Text',
      docx: 'Document',
      xlsx: 'Spreadsheet',
      // Add more types as needed
    };
  
    const fileType = typeMap[extension ?? ''] || 'Unknown';
  
    // Log fileType for debugging
    console.log(`File: ${fileName}, Type: ${fileType}`);
  
    return fileType;
  }
  