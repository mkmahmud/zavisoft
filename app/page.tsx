'use client';

import { Button } from '@/components/ui/button';
import { useGetUsersQuery } from '@/lib/services/apiSlice';
import { Loader2 } from 'lucide-react';

export default function UsersPage() {
  const { data: users, isLoading } = useGetUsersQuery();
  console.log(users);

  if (isLoading) return <Loader2 className="animate-spin" />;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-rubik font-bold underline text-primary text-[223px] uppercase">Do it right </h1>
      <Button className="mt-4" onClick={() => console.log('Button clicked!')}>
        Click Me
      </Button>
      <ul className="mt-4">
        {users?.map((user) => (
          <li key={user.id} className="border-b py-2 ">{user.name}</li>
        ))}
      </ul>
    </div>
  );
}