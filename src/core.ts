import type { Flag } from "./types.js";

export default function flags(config: Flag[]) {
  const flags = new Map<string, Flag>();

  for (const flag of config) {
    flags.set(flag.key, flag);
  }
  
  return flags;
}