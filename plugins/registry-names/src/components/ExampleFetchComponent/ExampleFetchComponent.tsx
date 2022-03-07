import React from 'react';
import useAsync from 'react-use/lib/useAsync';
export const ExampleFetchComponent = () => {
  //backend.baseUrl
  const { value } = useAsync(async (): Promise<any> => {
    const response = await fetch('http://localhost:7007/api/registry-names');
    const data = await response.json();
<<<<<<< HEAD
=======
    console.log(`SFSDF ${JSON.stringify(data)}`)
>>>>>>> fdadc29 (asfda)
    return data.tags;
  }, []);

  return (
    <ul>
      {value?.map((tag: any) => {
        return <li key={tag.tagName}>{tag.tagName}</li>;
      })}
    </ul>
  );
};
