import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface VisitorStats {
  total: number;
  today: number;
  thisMonth: number;
}

const AdminStats: React.FC = () => {
  const [stats, setStats] = useState<VisitorStats>({ total: 0, today: 0, thisMonth: 0 });
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setIsAdmin(user?.id === '${YOUR_USER_ID}');
    };

    checkAdmin();
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      if (!isAdmin) return;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

      const { data: totalVisits } = await supabase
        .from('visitors')
        .select('count', { count: 'exact' });

      const { data: todayVisits } = await supabase
        .from('visitors')
        .select('count', { count: 'exact' })
        .gte('timestamp', today.toISOString());

      const { data: monthVisits } = await supabase
        .from('visitors')
        .select('count', { count: 'exact' })
        .gte('timestamp', firstDayOfMonth.toISOString());

      setStats({
        total: totalVisits?.count || 0,
        today: todayVisits?.count || 0,
        thisMonth: monthVisits?.count || 0
      });
    };

    fetchStats();
    const interval = setInterval(fetchStats, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [isAdmin]);

  if (!isAdmin) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
      <h3 className="text-lg font-bold mb-2">Visitor Stats</h3>
      <div className="space-y-2">
        <p>Today: {stats.today}</p>
        <p>This Month: {stats.thisMonth}</p>
        <p>Total: {stats.total}</p>
      </div>
    </div>
  );
};

export default AdminStats;