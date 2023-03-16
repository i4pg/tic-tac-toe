</p>
<h1>Tic Tac Toe</h1>
<p>This is a simple implementation of the classic game Tic Tac Toe. It is part of the curriculum for The Odin Project's
  JavaScript course.</p>
<h2>Demo</h2>
<p>You can play the game online <a href="https://i4pg.github.io/tic-tac-toe/" target="_new">here</a>.</p>
<h2>Features</h2>
<ul>
  <li>Two players can play the game (X and O).</li>
  <li>Players can take turns marking spaces on a 3x3 grid.</li>
  <li>The game ends when a player gets three in a row or all spaces are filled without a winner.</li>
  <li>The winner is displayed at the end of the game.</li>
  <li>The game keeps running and calculating points.</li>
  <li>It supports single player so you can play against a computer.</li>
  <li>The computer uses a simple algorithm that takes all the available moves, then loops twice. First, it tries each
    move and plays it if it's a winning move; otherwise, it goes to the next move. Second, if there is no winning move,
    it tries each possible move and plays there if it's preventing the opponent from winning; otherwise, it chooses a
    random place to play.</li>
  <li>It has a mobile-first responsive design, using <a href="https://bulma.io/" target="_new">Bulma.io</a>.</li>
</ul>
<h2>Showcase</h2>
<p>Here are some screenshots of the Tic Tac Toe game:</p>
<img src="./assest/showcase/cp1.gif" alt="minimal" align="right" width="500px" />
<img src="./assest/showcase/cp2.gif" alt="minimal" align="right" width="500px" />
<img src="./assest/showcase/multi.gif" alt="minimal" align="right" width="500px" />
<img src="./assest/showcase/mobile.gif" alt="minimal" align="right" width="500px" />
<img src="./assest/showcase/desktop.gif" alt="minimal" align="right" width="500px" />
<p><img src="/screenshots/tic-tac-toe.png" alt="Tic Tac Toe Screenshot"></p>
<h2>Getting Started</h2>
<h3>Usage</h3>
<p>You can play the game online <a href="https://i4pg.github.io/tic-tac-toe/" target="_new">here</a>.</p>
<h3>Installation</h3>
<p>To run this program locally, you can clone the repository to your local machine using the following command:</p>
<pre>
  <div class="bg-black rounded-md mb-4">
    <div
      class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md">
      <span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em"
          xmlns="http://www.w3.org/2000/svg" style="--darkreader-inline-stroke: currentColor;"
          data-darkreader-inline-stroke="">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>Copy code</button>
    </div>
    <div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git <span
          class="hljs-built_in">clone</span> https://github.com/i4pg/tic-tac-toe.git
      </code></div>
  </div>
</pre>
<p>Then open the <code>index.html</code> file in your web browser to start playing the game.</p>
<h2>Contributing</h2>
<p>Contributions to this project are welcome. To contribute, follow these steps:</p>
<ol>
  <li>
    <p>Fork this repository.</p>
  </li>
  <li>
    <p>Create a new branch with your changes:</p>
    <pre>
      <div class="bg-black rounded-md mb-4">
        <div
          class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md">
          <span>javascript</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none"
              stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"
              height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
              style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke="">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
            </svg>Copy code</button>
        </div>
        <div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-javascript">git checkout -b my-<span
              class="hljs-keyword">new</span>-branch
          </code></div>
      </div>
    </pre>
  </li>
  <li>
    <p>Make your changes and commit them:</p>
    <pre>
      <div class="bg-black rounded-md mb-4">
        <div
          class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md">
          <span>sql</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
              width="1em" xmlns="http://www.w3.org/2000/svg" style="--darkreader-inline-stroke: currentColor;"
              data-darkreader-inline-stroke="">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
            </svg>Copy code</button>
        </div>
        <div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-sql">git <span
              class="hljs-keyword">commit</span> <span class="hljs-operator">-</span>am <span class="hljs-string">'Add
              some feature'</span>
          </code></div>
      </div>
    </pre>
  </li>
  <li>
    <p>Push your changes to your forked repository:</p>
    <pre>
      <div class="bg-black rounded-md mb-4">
        <div
          class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md">
          <span>perl</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
              width="1em" xmlns="http://www.w3.org/2000/svg" style="--darkreader-inline-stroke: currentColor;"
              data-darkreader-inline-stroke="">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
            </svg>Copy code</button>
        </div>
        <div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-perl">git <span
              class="hljs-keyword">push</span> origin <span class="hljs-keyword">my</span>-new-branch
          </code></div>
      </div>
    </pre>
  </li>
  <li>
    <p>Create a pull request on this repository.</p>
  </li>
</ol>
<h2>License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE" target="_new">LICENSE</a> file for details.
</p>
</div>
# Tic Tac Toe

This is a simple implementation of the classic game Tic Tac Toe. It is part of the curriculum for The Odin Project's
JavaScript course.

## Demo

You can play the game online []here.
Features

Two players can play the game (X and O).
Players can take turns marking spaces on a 3x3 grid.
The game ends when a player gets three in a row or all spaces are filled without a winner.
The winner is displayed at the end of the game.
The game keeps running and calculating points.
It supports single player so you can play against a computer.
The computer uses a simple algorithm that takes all the available moves, then loops twice. First, it tries each move and
plays it if it's a winning move; otherwise, it goes to the next move. Second, if there is no winning move, it tries each
possible move and plays there if it's preventing the opponent from winning; otherwise, it chooses a random place to
play.
It has a mobile-first responsive design, using Bulma.io.

Showcase

Here are some screenshots of the Tic Tac Toe game:


Getting Started
Usage

You can play the game online here.
Installation

To run this program locally, you can clone the repository to your local machine using the following command:

bash

git clone https://github.com/i4pg/tic-tac-toe.git

Then open the index.html file in your web browser to start playing the game.
Contributing

Contributions to this project are welcome. To contribute, follow these steps:

Fork this repository.

Create a new branch with your changes:

javascript

git checkout -b my-new-branch

Make your changes and commit them:

sql

git commit -am 'Add some feature'

Push your changes to your forked repository:

perl

git push origin my-new-branch

Create a pull request on this repository.

License

This project is licensed under the MIT License. See the LICENSE file for details.
