import './App.css';
import { useState } from 'react'
import { Tab } from '@headlessui/react'

import RunBoy from "./assets/images/run_boy.png"
import PunchBoy from "./assets/images/punch_boy.png"
import KoBoy from "./assets/images/ko_boy.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const App = () => {
  let [categories] = useState({
    Run:
    {
      id: 1,
      title: "let's run...",
      url: RunBoy,
      width: 389,
      height: 662,
      animation: 'animate-sprite-run'
    },
    Punch:
    {
      id: 2,
      title: "Let's punch...",
      url: PunchBoy,
      width: 669,
      height: 621,
      animation: "animate-sprite-punch"
    },
    KO:
    {
      id: 3,
      title: "Let's die...",
      url: KoBoy,
      width: 746,
      height: 631,
      animation: "animate-sprite-ko"
    },
  })

  return (
    <div className="w-full max-w-3xl px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((post, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-white rounded-xl p-3',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
              )}
            >
              <h1>{post.title}</h1>
              <div
                className={'mx-auto bg-no-repeat ' + (post.id === 3 ? "animate-sprite-ko" : (post.id === 2 ? "animate-sprite-punch" : "animate-sprite-run"))}
                style={{ width: post.width, height: post.height, backgroundImage: `url(${post.url})` }}
              >
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}


export default App;
