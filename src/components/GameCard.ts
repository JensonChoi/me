import type { ArcadeGame } from '../data/games';
import { element, link, picture, validUrl } from '../utils/dom';
export function gameCard(game: ArcadeGame, index: number): HTMLElement {
  const card = element('article', 'game-card');
  card.append(picture(game.thumbnail, `${game.title} gameplay screenshot`, `🎮 ${game.title}`, 'game-image'));
  const content = element('div', 'game-content');
  const eyebrow = element('div', 'game-eyebrow');
  eyebrow.append(element('span', '', `0${index + 1} / ${game.tags.at(-1) ?? 'Game'}`));
  content.append(eyebrow, element('h3', '', game.title), element('p', 'game-description', game.description));
  const tags = element('ul', 'tags');
  game.tags.forEach(tag => tags.append(element('li', '', tag)));
  const actions = element('div', 'game-actions');
  if (game.available !== false && validUrl(game.playUrl)) actions.append(link('Play Now ↗', game.playUrl, 'play-button', true));
  else { const button = element('button', 'play-button', 'Coming Soon'); button.disabled = true; actions.append(button); }
  if (validUrl(game.githubUrl)) { const source = link('Source ↗', game.githubUrl, 'source-link', true); source.setAttribute('aria-label', `${game.title} source code on GitHub`); actions.append(source); }
  content.append(tags, actions); card.append(content); return card;
}
