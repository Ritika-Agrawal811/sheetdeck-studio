import { writable, derived, type Readable } from 'svelte/store';
import { GetConfig } from '../../wailsjs/go/main/App';
import { snakeToCamel } from '../utils/caseConverter';

import type { ConfigResponse } from '../types/config';

interface ConfigState {
  data: ConfigResponse | null;
  loading: boolean;
  error: string | null;
}

function createConfigStore() {
  const { subscribe, set, update } = writable<ConfigState>({
    data: null,
    loading: false,
    error: null,
  });

  const load = async () => {
    update((state) => ({ ...state, loading: true }));

    try {
      const apiResponse = await GetConfig();
      const data = snakeToCamel<ConfigResponse>(apiResponse);
      console.log(data);
      set({ data, loading: false, error: null });
    } catch (error) {
      set({
        data: null,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to load config',
      });
    }
  };

  const reset = () => {
    set({ data: null, loading: false, error: null });
  };

  return {
    subscribe,
    load,
    reset,
  };
}

export const configStore = createConfigStore();

// derived stored for easy access
export const categories: Readable<string[]> = derived(
  configStore,
  ($store) => $store.data?.categories ?? []
);

export const subcategories: Readable<string[]> = derived(
  configStore,
  ($store) => $store.data?.subcategories ?? []
);
