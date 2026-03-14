import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setShowbot } from './slice01';
import axiosClient from '../utils/axiosClient';



// Simple response processor to ensure safe HTML output
const processResponse = (text) => {
  // Basic sanitization and markdown-like formatting
  return text
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-900 p-2 rounded"><code>$1</code></pre>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
};

export default function ChatBot() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [history]);


  useEffect(() => {
    if (history.length === 0) return;

    const lastMsg = history[history.length - 1];
    if (lastMsg.role !== 'user') return;

    const fetchResponse = async () => {
      try {
        const response = await axiosClient.post("/ask/chat", {
          messages: history
        });

        const responseText = response?.data?.message || response?.message || "No response";
        const processedResponse = processResponse(responseText);

        setHistory(prev => [
          ...prev,
          {
            role: 'model',
            parts: [{ text: processedResponse }],
          }
        ]);
      } catch (err) {
        setHistory(prev => [
          ...prev,
          {
            role: 'model',
            parts: [{ text: "<span class='text-red-500'>Error occurred</span>" }]
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetchResponse();

  }, [history]);


  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setHistory(prev => [
      ...prev,
      {
        role: 'user',
        parts: [{ text: input }],
      }
    ]);

    setInput('');
  };
  // const handleSend = async (e = null) => {
  //   e.preventDefault();
  //   const inputText = input;
  //   if (!inputText.trim() || loading) return;

  //   const userMessage = {
  //     role: 'user',
  //     parts: [{ text: inputText }],
  //   };

  //   setHistory(prev => [...prev, userMessage]);
  //   setInput('');
  //   setLoading(true);

  //   try {
  //     console.log("here1");
  //     useEffect(() => {
  //       console.log("here2");
  //       const main = async () => {
  //         console.log(history);
  //         const response = await axiosClient.post("/ask/chat", {
  //           messages: history
  //         })
  //         // const chat = model.startChat({ history });
  //         // const result = await chat.sendMessage(inputText);
  //         const responseText = response?.message;
  //         const processedResponse = processResponse(responseText);

  //         const modelMessage = {
  //           role: 'model',
  //           parts: [{ text: processedResponse }],
  //         };
  //         setHistory(prev => [...prev, modelMessage]);
  //       }

  //       main();
  //     }, [history]);
  //   } catch (error) {
  //     setHistory(prev => [...prev, {
  //       role: 'model',
  //       parts: [{ text: "<div class='text-red-500'>Oops! Something went wrong. Please try again.</div>" }]
  //     }]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const dispatch = useDispatch();

  return (
    <div className="relative font-sans">
      <div className="fixed z-90 bottom-8 right-1 sm:right-4 w-[95vw] sm:w-[50vw] lg:w-[25vw] h-[70vh] bg-gray-900 rounded-2xl shadow-2xl flex flex-col">
        {/* Header */}
        <div className="w-full bg-gradient-to-r from-purple-600 to-blue-600 h-16 rounded-t-2xl flex items-center justify-between">
          <h2 className="text-white text-lg font-semibold ml-3">Nakul Kumar<span className="mx-2 animate-pulse text-yellow-400 ring-2 ring-purple-400 rounded-full px-2">🚀</span></h2>
          <div onClick={() => { dispatch(setShowbot()) }} className="text-white mr-4 cursor-pointer bg-gray-800/25 rounded-full w-8 h-8 flex justify-center items-center">Х</div>
        </div>

        {/* Chat Area */}
        <main
          ref={chatContainerRef}
          className="flex-1 p-4 space-y-4 overflow-y-auto custom-scroll "
        >
          {history.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-in`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl shadow-md transition-all
                  ${msg.role === 'user'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border border-blue-500/30'
                    : 'bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 border border-gray-600/30'
                  } ${msg.role === 'user' ? 'rounded-br-none' : 'rounded-bl-none'}`}
                dangerouslySetInnerHTML={{ __html: msg.parts[0].text }}
              />
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="p-4 rounded-2xl bg-gray-800 border border-gray-700 shadow-md">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full animate-ping bg-blue-400"></div>
                  <div className="w-3 h-3 rounded-full animate-ping delay-150 bg-blue-400"></div>
                  <div className="w-3 h-3 rounded-full animate-ping delay-300 bg-blue-400"></div>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Input Area */}
        <footer className="px-4 py-3 border-t border-gray-700 bg-gray-900">
          <form
            onSubmit={(e) => handleSend(e)}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-3 rounded-xl bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              placeholder="Chat with Nakul..."
              disabled={loading}
              aria-label="Chat input"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-600 disabled:cursor-not-allowed transition-all"
              aria-label="Send message"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                </svg>
              ) : (
                'Send'
              )}
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
}