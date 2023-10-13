const buildUrl = (baseUrl, endpoint, params = {}) => {
  const url = new URL(`${baseUrl}${endpoint}`);
  Object.keys(params).forEach(key => {
    url.searchParams.append(key, params[key]);
  });
  return url;
};

export const getApiInfo = (baseUrl, endpoint, params = {}) => {
  const url = buildUrl(baseUrl, endpoint, params);
  return {
    baseUrl,
    endpoint,
    params,
    url,
  };
};

export const apiHelper = async (
  method,
  baseUrl,
  endpoint,
  params = {},
  additionalHeaders = {},
  onSuccess,
  onError,
) => {
  const url = buildUrl(baseUrl, endpoint, params);

  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...additionalHeaders,
  };

  try {
    const response = await fetch(url, {
      method,
      params: JSON.stringify(params),
      headers: defaultHeaders,
    });

    const status = response.status;
    console.log('Response Status:', status);
    if (status === 200) {
      console.log('Response Data:', data);
      const data = await response.json();
      onSuccess(data);
    } else if (status === 201) {
      const data = await response.json();
      onSuccess(data);
    } else if (status === 204) {
      onSuccess(null);
    } else if (status === 301) {
      throw new Error(
        'Moved Permanently: The requested resource has been moved to a new location.',
      );
    } else if (status === 302) {
      throw new Error(
        'Found: The requested resource is temporarily located at a new location.',
      );
    } else if (status === 400) {
      throw new Error('Bad Request: The request was invalid or malformed.');
    } else if (status === 401) {
      throw new Error('Unauthorized: Authentication is required.');
    } else if (status === 403) {
      throw new Error('Forbidden: Access is forbidden.');
    } else if (status === 404) {
      throw new Error('Not Found: The requested resource does not exist.');
    } else if (status === 500) {
      throw new Error(
        'Internal Server Error: An unexpected error occurred on the server while processing the request.',
      );
    } else if (status === 502) {
      throw new Error(
        'Bad Gateway: The server received an invalid response from an upstream server.',
      );
    } else if (status === 503) {
      throw new Error(
        'Service Unavailable: The server is currently unavailable.',
      );
    } else {
      throw new Error(`HTTP Error! Status: ${status}`);
    }
  } catch (error) {
    onError(error);
  }
};
