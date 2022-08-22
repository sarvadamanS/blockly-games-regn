// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">\u0A2C\u0A32\u0A3E\u0A15\u0A32\u0A40 \u0A17\u0A47\u0A2E\u0A3E\u0A02</span><span id="Games_puzzle">\u0A2C\u0A41\u0A1D\u0A3E\u0A30\u0A24</span><span id="Games_maze">\u0A2D\u0A41\u0A71\u0A32\u0A47</span><span id="Games_bird">\u0A2A\u0A70\u0A1B\u0A40</span><span id="Games_turtle">\u0A15\u0A71\u0A1B\u0A42</span><span id="Games_movie">\u0A2E\u0A42\u0A35\u0A40</span><span id="Games_music">\u0A38\u0A70\u0A17\u0A40\u0A24</span><span id="Games_pondTutor">\u0A2A\u0A4B\u0A02\u0A21 \u0A1F\u0A3F\u0A0A\u0A1F\u0A30</span><span id="Games_pond">\u0A2A\u0A4B\u0A02\u0A21</span><span id="Games_genetics">\u0A1C\u0A48\u0A28\u0A47\u0A1F\u0A3F\u0A15\u0A38</span><span id="Games_linesOfCode1">\u0A2C\u0A41\u0A1D\u0A3E\u0A30\u0A240</span><span id="Games_linesOfCode2">\u0A2C\u0A41\u0A1D\u0A3E\u0A30\u0A241</span><span id="Games_nextLevel">\u0A15\u0A40 \u0A24\u0A41\u0A38\u0A40\u0A02 \u0A2A\u0A71\u0A27\u0A30 \u0A32\u0A08 \u0A24\u0A3F\u0A06\u0A30 \u0A39\u0A4B %1?</span><span id="Games_finalLevel">\u0A2C\u0A41\u0A1D\u0A3E\u0A30\u0A242</span><span id="Games_submitTitle">\u0A2C\u0A41\u0A1D\u0A3E\u0A30\u0A243</span><span id="Games_linkTooltip">\u0A2C\u0A41\u0A1D\u0A3E\u0A30\u0A244</span><span id="Games_runTooltip">\u0A2C\u0A41\u0A1D\u0A3E\u0A30\u0A245</span><span id="Games_runProgram">\u0A2C\u0A41\u0A1D\u0A3E\u0A30\u0A246</span><span id="Games_resetTooltip">\u0A2C\u0A41\u0A1D\u0A3E\u0A30\u0A247</span><span id="Games_resetProgram">\u0A2C\u0A41\u0A1D\u0A3E\u0A30\u0A248</span><span id="Games_help">\u0A2C\u0A41\u0A1D\u0A3E\u0A30\u0A249</span><span id="Games_catLogic">\u0A2D\u0A41\u0A71\u0A32\u0A470</span><span id="Games_catLoops">\u0A2D\u0A41\u0A71\u0A32\u0A471</span><span id="Games_catMath">\u0A2D\u0A41\u0A71\u0A32\u0A472</span><span id="Games_catText">\u0A2D\u0A41\u0A71\u0A32\u0A473</span><span id="Games_catLists">\u0A2D\u0A41\u0A71\u0A32\u0A474</span><span id="Games_catColour">\u0A2D\u0A41\u0A71\u0A32\u0A475</span><span id="Games_catVariables">\u0A2D\u0A41\u0A71\u0A32\u0A476</span><span id="Games_catProcedures">\u0A2D\u0A41\u0A71\u0A32\u0A477</span><span id="Games_httpRequestError">\u0A2D\u0A41\u0A71\u0A32\u0A478</span><span id="Games_linkAlert">Share your blocks with this link:\n\n%1</span><span id="Games_hashError">\u0A2D\u0A41\u0A71\u0A32\u0A479</span><span id="Games_xmlError">\u0A2A\u0A70\u0A1B\u0A400</span><span id="Games_submitted">\u0A2A\u0A70\u0A1B\u0A401</span><span id="Games_listVariable">\u0A2A\u0A70\u0A1B\u0A402</span><span id="Games_textVariable">\u0A2A\u0A70\u0A1B\u0A403</span><span id="Games_breakLink">\u0A2A\u0A70\u0A1B\u0A404</span><span id="Games_blocks">\u0A2A\u0A70\u0A1B\u0A405</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.headerBar = function(opt_data, opt_ignored, opt_ijData) {
  return '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan(opt_data, null, opt_ijData) + ((opt_ijData.level) ? BlocklyGames.soy.levelLinks({suffix: '' + ((opt_data.levelLinkSuffix) ? soy.$$escapeHtml(opt_data.levelLinkSuffix) : '')}, null, opt_ijData) : '') + '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>' + ((opt_data.hasLinkButton) ? '&nbsp;<button id="linkButton" title="\u0A2C\u0A41\u0A1D\u0A3E\u0A30\u0A244"><img src="common/1x1.gif" class="link icon21"></button>' : '') + ((opt_data.hasHelpButton) ? '&nbsp;<button id="helpButton">\u0A2C\u0A41\u0A1D\u0A3E\u0A30\u0A249</button>' : '') + ((opt_data.farLeftHtml) ? '&nbsp;' + soy.$$filterNoAutoescape(opt_data.farLeftHtml) : '') + '</td></tr></table>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.headerBar.soyTemplateName = 'BlocklyGames.soy.headerBar';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '\u0A2C\u0A32\u0A3E\u0A15\u0A32\u0A40 \u0A17\u0A47\u0A2E\u0A3E\u0A02</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.titleSpan.soyTemplateName = 'BlocklyGames.soy.titleSpan';
}


BlocklyGames.soy.levelLinks = function(opt_data, opt_ignored, opt_ijData) {
  var output = ' &nbsp; ';
  var iLimit207 = opt_ijData.maxLevel + 1;
  for (var i207 = 1; i207 < iLimit207; i207++) {
    var url__soy208 = '?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i207) + ((opt_data.suffix) ? '&' + soy.$$escapeHtml(opt_data.suffix) : '');
    output += ' ' + ((i207 == opt_ijData.level) ? '<span class="level_number level_done" id="level' + soy.$$escapeHtml(i207) + '">' + soy.$$escapeHtml(i207) + '</span>' : (i207 == opt_ijData.maxLevel) ? '<a class="level_number" id="level' + soy.$$escapeHtml(i207) + '" href="' + soy.$$escapeHtml(url__soy208) + '">' + soy.$$escapeHtml(i207) + '</a>' : '<a class="level_dot" id="level' + soy.$$escapeHtml(i207) + '" href="' + soy.$$escapeHtml(url__soy208) + '"></a>');
  }
  return output;
};
if (goog.DEBUG) {
  BlocklyGames.soy.levelLinks.soyTemplateName = 'BlocklyGames.soy.levelLinks';
}


BlocklyGames.soy.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.dialog.soyTemplateName = 'BlocklyGames.soy.dialog';
}


BlocklyGames.soy.doneDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u0A2A\u0A70\u0A1B\u0A406</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel" class="dialogCancel"></button><button id="doneOk" class="secondary dialogOk"></button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">\u0A2A\u0A70\u0A1B\u0A407<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel" class="dialogCancel"></button><button id="abortOk" class="secondary dialogOk"></button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.abortDialog.soyTemplateName = 'BlocklyGames.soy.abortDialog';
}


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.storageDialog.soyTemplateName = 'BlocklyGames.soy.storageDialog';
}


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary dialogOk" onclick="BlocklyDialogs.hideDialog(true)"></button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
