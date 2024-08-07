import { d as defineEventHandler, u as useRuntimeConfig } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';

const news = defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const apiKey = config.apiKey;
  const apiUrl = `${config.public.apiBaseUrl}?q=bitcoin`;
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    return { error: error.message };
  }
});

export { news as default };
//# sourceMappingURL=news.mjs.map
