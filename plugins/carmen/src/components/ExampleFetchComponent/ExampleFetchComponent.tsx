import React from 'react';
import { Progress } from '@backstage/core-components';
import Alert from '@material-ui/lab/Alert';
import useAsync from 'react-use/lib/useAsync';
import { TagCloud } from 'react-tagcloud';

export const ExampleFetchComponent = () => {
  //backend.baseUrl
  const { value, loading, error } = useAsync(async (): Promise<any> => {
    const response = await fetch('http://localhost:7007/api/registry-names');
    const data = await response.json();
    return data.tags;
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  const customRenderer = (tag: any, size: any, color: any) => {
    return (
      <span key={tag.value} style={{ color }} className={`tag-${size}`}>
        {tag.value}
      </span>
    )
  }
  console.log(value)
  return <TagCloud minSize={12} maxSize={40} tags={value} renderer={customRenderer}/>;
};
