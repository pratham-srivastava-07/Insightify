import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Clock, Bell, Calendar } from 'lucide-react';

const chartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 450 },
  { name: 'May', value: 600 },
  { name: 'Jun', value: 550 },
];

export const SidebarDemo = () => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">
          <Card className="flex-1">
            <CardContent className="p-4 flex items-center gap-4">
              <Users className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">1,234</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Active Users</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="flex-1">
            <CardContent className="p-4 flex items-center gap-4">
              <Clock className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">45.2h</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Session</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="flex-1">
            <CardContent className="p-4 flex items-center gap-4">
              <Bell className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">89</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Notifications</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="flex-1">
            <CardContent className="p-4 flex items-center gap-4">
              <Calendar className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Events Today</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-2 flex-1">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Activity Overview</CardTitle>
            </CardHeader>
            <CardContent className="h-[calc(100%-5rem)]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: 'New user registration', time: '2 minutes ago', color: 'bg-blue-500' },
                  { title: 'Project milestone completed', time: '1 hour ago', color: 'bg-green-500' },
                  { title: 'System update scheduled', time: '3 hours ago', color: 'bg-yellow-500' },
                  { title: 'New feature deployment', time: '5 hours ago', color: 'bg-purple-500' }
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full ${activity.color}`} />
                    <div>
                      <p className="font-medium dark:text-gray-200">{activity.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};