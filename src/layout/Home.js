import { useState, useEffect } from 'react';
import { useDB } from '../context/dbProvider';
import { useAuth } from '../context/authProvider';
import Repo from '../stack/Repo';
import Button from '../utility/Button';
import { Icon } from '@iconify/react';
import BrowseRepo from './BrowseRepo';
import ScaleLoading from '../utility/ScaleLoading';

function Home() {
  const [browseRepo, setBrowseRepo] = useState(false);
  const [stacks, setStacks] = useState(null);
  const [shrink, setShrink] = useState(false);
  const { listenToStacks } = useDB();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    const unsub = listenToStacks(setStacks);
    return unsub;
  }, [user, listenToStacks]);

  return (
    <main className='mb-8 mt-[5vw]'>
      <div className='mx-auto w-[90%] lg:w-10/12 max-w-[24rem] sm:max-w-[48rem] lg:max-w-[90rem]'>
        <ul className='flex gap-4'>
          <li className='relative'>
            <Button onClick={() => setBrowseRepo((prev) => !prev)}>
              Browse Repo
              <Icon icon='fe:search' flip='horizontal' className='lg:ml-2' />
            </Button>
            {browseRepo && <BrowseRepo setBrowseRepo={setBrowseRepo} />}
          </li>
          <li>
            <Button onClick={() => setShrink((prev) => !prev)}>
              Shrink all
              <Icon icon={shrink ? 'lucide:expand' : 'lucide:shrink'} className='lg:ml-2' />
            </Button>
          </li>
        </ul>
        
        <section className='mt-8 grid grid-cols-1 gap-y-8 overflow-x-auto pb-8 text-white sm:grid-cols-2 sm:gap-6 md:gap-[5vw] lg:mt-14 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4'>
          {!stacks && <ScaleLoading />}
          {!stacks?.length && <p className='mt-[5vh] text-gray-300 text-center'> You haven't created any stack yet</p>}
          {stacks?.map(({ id, name, langs_url }) => {
            return (
              <Repo
                key={id}
                name={name}
                stackId={id}
                langs_url={langs_url}
                shrink={shrink}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Home;
