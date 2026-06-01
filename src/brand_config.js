import { AudioEngine } from './audio.js';

export const BRAND_CONFIG = {
  units: {
    "conflict_middle_east": {
      brandHeader: "Fareham Chimney Sweep Inc.",
      quotes: [
        "Because unblocking a chimney is tough, but untangling the origins of the Arab-Israeli conflict is a whole different level of messy.",
        "Clearing out soot since 2013, because a blocked flue is bad, but confusing the McMahon-Hussein Correspondence with the Balfour Declaration is catastrophic.",
        "Sweeping away the historical fog. Keeping your chimneys clear and your knowledge on the 1948 Arab-Israeli War crystal clear.",
        "Because a chimney fire causes smoke, but the Suez Crisis of 1956 caused an absolute international geopolitical meltdown.",
        "We handle the dust, you handle the drama. Sweeping through everything from the Camp David Accords to the Oslo Peace Process.",
        "Because a clogged chimney cuts off the draft, but the 1973 Oil Crisis cut off the entire Western world.",
        "From the streets of Fareham to the borders of the Levant: we sweep the flues so you can master the causes of the Six-Day War.",
        "Because cleaning a fireplace takes grit, but parsing the shifting borders of the Sykes-Picot Agreement takes a total miracle.",
        "Sweeping away the confusion. Because a blocked chimney ruins your living room, but forgetting the roles of Nasser and Ben-Gurion ruins your 12-mark exam answer.",
        "We scrape out the creosote so you can scrape together top marks on the causes and consequences of the Six-Day War.",
        "Because a chimney sweep faces major blockages, but nothing quite like the diplomatic stalemate of the UN Resolution 242.",
        "From Fareham flues to the Sinai Peninsula: making sure your chimneys draw perfectly and your timeline of the Yom Kippur War is absolutely flawless.",
        "Because a chimney sweep knows how to handle a breakdown, but the collapse of the 2000 Camp David Summit was an entirely different kind of disaster.",
        "Keeping the drafts flowing and the history glowing—because a chimney needs a clear exit, just like the British needed one from the Palestine Mandate in 1948.",
        "Because an unswept chimney accumulates soot, but the Gaza Strip and West Bank accumulated decades of complex geopolitical tension."
      ]
    }
  }
};

let brandBannerTimeout = null;
let brandBannerHideTimeout = null;
let brandBannerPinned = false;
let bannerListenerInitialized = false;

export function startBannerDismiss(delay) {
  if (brandBannerTimeout) clearTimeout(brandBannerTimeout);
  if (brandBannerHideTimeout) clearTimeout(brandBannerHideTimeout);
  
  const banner = document.getElementById('brand-subheader-banner');
  if (!banner) return;
  
  brandBannerTimeout = setTimeout(() => {
    banner.classList.add('fade-out');
    brandBannerHideTimeout = setTimeout(() => {
      banner.style.display = 'none';
    }, 500);
  }, delay);
}

export function updateBrandBanner() {
  const banner = document.getElementById('brand-subheader-banner');
  const quoteEl = document.getElementById('brand-subheader-quote');
  const titleEl = document.getElementById('brand-subheader-title');
  
  if (!banner || !quoteEl || !titleEl) return;
  
  brandBannerPinned = false;
  banner.style.borderLeft = '';
  banner.classList.remove('fade-out');
  
  if (!bannerListenerInitialized) {
    banner.style.cursor = 'pointer';
    banner.title = "Click to pin/unpin this message";
    banner.addEventListener('click', () => {
      brandBannerPinned = !brandBannerPinned;
      AudioEngine.play('click');
      
      if (brandBannerPinned) {
        if (brandBannerTimeout) clearTimeout(brandBannerTimeout);
        if (brandBannerHideTimeout) clearTimeout(brandBannerHideTimeout);
        banner.classList.remove('fade-out');
        banner.style.borderLeft = '4px solid var(--accent)';
      } else {
        banner.style.borderLeft = '';
        startBannerDismiss(5000);
      }
    });
    bannerListenerInitialized = true;
  }
  
  const unitKey = "conflict_middle_east";
  const config = BRAND_CONFIG.units[unitKey];
  
  if (config) {
    titleEl.textContent = config.brandHeader;
    
    const randomIndex = Math.floor(Math.random() * config.quotes.length);
    quoteEl.textContent = `"${config.quotes[randomIndex]}"`;
    banner.style.display = 'flex';
    
    startBannerDismiss(5000);
  } else {
    banner.style.display = 'none';
  }
}
