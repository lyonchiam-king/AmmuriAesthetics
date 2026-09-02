import React, { useEffect, useState } from 'react';
import { FileSpreadsheet, Download, RefreshCw, CheckCircle2 } from 'lucide-react';

interface GoogleSheetsBarProps {
  lastUpdatedTrigger?: number;
}

export const GoogleSheetsBar: React.FC<GoogleSheetsBarProps> = ({ lastUpdatedTrigger }) => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCount = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/enquiries');
      if (res.ok) {
        const data = await res.json();
        setCount(data.count || 0);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCount();
  }, [lastUpdatedTrigger]);

  return (
    <div className="bg-[#2C2C2C] text-white py-3 px-4 border-b border-[#8C8C8C]/30 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
            <FileSpreadsheet className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-semibold text-white">Google Sheets Connector:</span>{' '}
            <span className="text-white/80">
              {count === 0 ? 'Ready to log new bookings & enquiries' : `${count} enquiry entry logged in spreadsheet`}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchCount}
            disabled={loading}
            className="text-white/70 hover:text-white flex items-center gap-1 transition-colors text-[11px]"
            title="Refresh spreadsheet count"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
            <span>Sync</span>
          </button>

          <a
            href="/api/enquiries/csv"
            download="ammuri_aesthetics_enquiries.csv"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-[11px] rounded-md transition-all shadow-xs active:scale-95"
          >
            <Download className="w-3 h-3" />
            <span>Export CSV for Google Sheets</span>
          </a>
        </div>

      </div>
    </div>
  );
};
