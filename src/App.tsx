import CountBtn from '@/components/CountBtn';
import ReactSVG from '@/assets/react.svg';
import {ConnectButton, useActiveAddress} from '@arweave-wallet-kit/react';

function App() {
  const walletaddy = useActiveAddress();
  console.log("your connected wallet is",walletaddy);
  
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-4 right-4">
        <ConnectButton />
      </div>
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center gap-y-4">
          <div className="inline-flex items-center gap-x-4">
            <img src={'/arlink.svg'} alt="Arlink Logo" className="w-48" />
            <span className="text-6xl">+</span>
            <img src={ReactSVG} alt="React Logo" className="w-32" />
            <span className="text-6xl">+</span>
            <img src={'/vite.svg'} alt="Vite Logo" className="w-32" />
          </div>
          <p>
            <CountBtn />
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
