import Image from "next/image";
import { Button } from '@repo/ui/button'

export default function Home() {
  return (
    <main className="bg-secondary-900 flex min-h-screen flex-col items-center justify-between pt-6">
     <h1 className='text-primary-900 text-3xl'>Hello theme 3</h1>
     <div className='text-xl flex gap-2'>
      <div className='text-error border border-error p-3 rounded-xl'>Error</div>
      <div className='text-success border border-success p-3 rounded-xl'>Success</div>
     </div>
     <div className='border border-gray h-[250px] bg-secondary-500 w-full p-4 rounded-t-xl border-white'>
      <Button>Log in</Button>
      <Button className="bg-none bg-secondary-100 text-secondary-contrast mt-4">Google</Button>
     </div>
   </main>
  );
}
