import isUnicodeSupported from 'is-unicode-supported';

export const symbols = isUnicodeSupported()
  ? {
      info: 'ℹ',
      success: '✔',
      warning: '⚠',
      error: '✖',
      pointer: '→',
    }
  : {
      info: 'i',
      success: '√',
      warning: '‼',
      error: '×',
      pointer: '>',
    };
