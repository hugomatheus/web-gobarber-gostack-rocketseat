import React, { createContext, useContext, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const toast = {
        id: uuidv4(),
        type,
        title,
        description,
      };

      // Alternativa 1
      // Quando é passado uma funcão dentro do setMessages é possivel pegar o dado atual que existe em message, sendo pego
      // no exemplo abaixo pela variavel stateMessage e copiamos o que existia + o novo dado (const toast)
      setMessages(stateMessage => [...stateMessage, toast]);

      // Alternativa 2
      // add messages no array de dependencia do metodo useCallback [messages]
      // setMessages([...messages, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    // Alternativa 1
    // utilizando message como dependecia no useCallback
    // const toasts = messages.filter(message => message.id !== id);
    // setMessages(toasts);

    // Alternativa 2
    // utilizando setMessage com uma função como parametro e obtendo o valor atual
    setMessages(stateMessage =>
      stateMessage.filter(message => message.id !== id),
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export { ToastProvider, useToast };
