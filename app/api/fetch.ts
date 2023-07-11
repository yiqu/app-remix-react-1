export async function fetchGet<T>(url: string, method: string, body?: any) {
  let extraHeaders: RequestInit  = {
  };

  if (method === 'POST') {
    extraHeaders = {
      ...extraHeaders,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  }


  const response = await fetch(`${url}`, {
    method,
    ...extraHeaders
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const result = await response.json() as Promise<T>;
  return result;
}

export interface FirebaseResult<T> {
  [key: string]: T;
}

export interface FirebaseResponse {
  [key: string]: string;
}