import { Header } from './components/Header'
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/chelfonseca.png',
      name: 'Michel Fonseca',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Eai rapaziada' },
      { type: 'paragraph', content: 'Dá uma olhada no meu portifólio que acabei de subir' },
      { type: 'link', content: 'chelfonseca' },
    ],
    publishedAt: new Date('2022-08-13 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/chelfonseca.png',
      name: 'Chel Fonseca',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala rapaziada' },
      { type: 'paragraph', content: 'Olha o meu Portifolio' },
      { type: 'link', content: 'chelfonseca' },
    ],
    publishedAt: new Date('2022-08-13 17:00:00'),
  },
];

export function App() {


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

