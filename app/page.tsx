'use client';

import { useGetUsersQuery } from '@/lib/services/apiSlice';
import { Loader2 } from 'lucide-react';
import Loading from './loading';


export default function UsersPage() {
  const { data: users, isLoading } = useGetUsersQuery();
  console.log(users);

  if (isLoading) return <Loading />;

  return (
    <div className='h-[2000px]'>
    </div>
  );
}