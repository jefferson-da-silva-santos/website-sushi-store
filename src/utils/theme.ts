import type { CSSProperties } from 'react';

export type Theme = string;
type StyleFunction = (theme: Theme) => CSSProperties;

const BACKGROUND_LIGHT = '#fff1eb';
const BACKGROUND_DARK = '#12100e';
const TEXT_PRIMARY_LIGHT = '#2c2420';
const TEXT_PRIMARY_DARK = '#e2d5d0';
const PARAGRAPH_LIGHT = '#68544b';
const PARAGRAPH_DARK = '#b4a197';
const RECENTLY_FORM_LIGHT = '#2c2420';
const RECENTLY_FORM_DARK = '#151511';
const CARD_BACKGROUND_LIGHT = '#fff5f0';
const CARD_BACKGROUND_DARK = '#151511';
const CARD_SHADOW_LIGHT = '0px 8px 20px hsla(21, 44%, 60%, 0.186)';
const CARD_SHADOW_DARK = '0px 8px 20px hsl(0deg 0% 0% / 60%)';
const FORM_SHADOW_DARK = '0px 0px 20px #00000052';

export const getBodyStyle: StyleFunction = (theme) => ({
  backgroundColor: theme === 'light' ? BACKGROUND_LIGHT : BACKGROUND_DARK,
});

export const getNavGroupStyle: StyleFunction = (theme) => ({
  backgroundColor: theme === 'light' ? BACKGROUND_LIGHT : BACKGROUND_DARK,
});

export const getNavListMenuStyle: StyleFunction = (theme) => ({
  backgroundColor: theme === 'light' ? BACKGROUND_LIGHT : BACKGROUND_DARK,
});

export const getRecentlyFormStyle: StyleFunction = (theme) => ({
  backgroundColor: theme === 'light' ? RECENTLY_FORM_LIGHT : RECENTLY_FORM_DARK,
  boxShadow: theme === 'light' ? 'none' : FORM_SHADOW_DARK,
});

export const getFooterLogoStyle: StyleFunction = (theme) => ({
  color: theme === 'light' ? TEXT_PRIMARY_LIGHT : TEXT_PRIMARY_DARK,
});

export const getRecentlyFormInputGroupStyle: StyleFunction = (theme) => ({
  backgroundColor: theme === 'light' ? '#ffffff' : BACKGROUND_DARK,
});

export const getPrimaryTextStyle: StyleFunction = (theme) => ({
  color: theme === 'light' ? TEXT_PRIMARY_LIGHT : TEXT_PRIMARY_DARK,
});

export const getRecentlyFormTitleStyle: StyleFunction = () => ({
  color: 'white',
});

export const getParagraphTextStyle: StyleFunction = (theme) => ({
  color: theme === 'light' ? PARAGRAPH_LIGHT : PARAGRAPH_DARK,
});

export const getFoodCardStyle: StyleFunction = (theme) => ({
  backgroundColor: theme === 'light' ? CARD_BACKGROUND_LIGHT : CARD_BACKGROUND_DARK,
  boxShadow: theme === 'light' ? CARD_SHADOW_LIGHT : CARD_SHADOW_DARK,
});