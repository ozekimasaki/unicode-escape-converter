document.addEventListener('DOMContentLoaded', () => {
  const inputText = document.getElementById('inputText');
  const outputText = document.getElementById('outputText');
  const convertBtn = document.getElementById('convertBtn');
  const clearBtn = document.getElementById('clearBtn');
  const copyBtn = document.getElementById('copyBtn');
  const toUnicodeBtn = document.getElementById('toUnicodeBtn');
  const toStringBtn = document.getElementById('toStringBtn');
  
  let isToUnicode = true;
  
  toUnicodeBtn.addEventListener('click', () => {
    isToUnicode = true;
    toUnicodeBtn.classList.add('active');
    toStringBtn.classList.remove('active');
    inputText.placeholder = 'ここにテキストを入力...';
  });
  
  toStringBtn.addEventListener('click', () => {
    isToUnicode = false;
    toStringBtn.classList.add('active');
    toUnicodeBtn.classList.remove('active');
    inputText.placeholder = '例: \\u3042\\u3044\\u3046';
  });
  
  convertBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (!text) {
      outputText.value = '';
      return;
    }
    
    try {
      if (isToUnicode) {
        outputText.value = convertToUnicode(text);
      } else {
        outputText.value = convertToString(text);
      }
    } catch (error) {
      outputText.value = '変換エラー: ' + error.message;
    }
  });
  
  clearBtn.addEventListener('click', () => {
    inputText.value = '';
    outputText.value = '';
    inputText.focus();
  });
  
  copyBtn.addEventListener('click', () => {
    const text = outputText.value;
    if (!text) return;
    
    navigator.clipboard.writeText(text).then(() => {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = 'コピーしました';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.classList.remove('copied');
      }, 2000);
    }).catch(err => {
      console.error('コピー失敗:', err);
      alert('コピーに失敗しました');
    });
  });
  
  // Enterキーで変換
  inputText.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
      convertBtn.click();
    }
  });
  
  function convertToUnicode(text) {
    return text.split('\n').map(line => {
      return line.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code < 0x10000) {
          return '\\u' + code.toString(16).padStart(4, '0');
        } else {
          const highSurrogate = Math.floor((code - 0x10000) / 0x400) + 0xD800;
          const lowSurrogate = ((code - 0x10000) % 0x400) + 0xDC00;
          return '\\u' + highSurrogate.toString(16).padStart(4, '0') + '\\u' + lowSurrogate.toString(16).padStart(4, '0');
        }
      }).join('');
    }).join('\n');
  }
  
  function convertToString(text) {
    return text.split('\n').map(line => {
      return line.replace(/\\u([0-9a-fA-F]{4})/g, (match, hex) => {
        const code = parseInt(hex, 16);
        return String.fromCharCode(code);
      });
    }).join('\n');
  }
});
