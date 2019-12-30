/**
 * book-events.js
 * Licensed under the MIT License
 * Copyright(c) 2019 Google Inc.
 */

/** @type {Object<String, String>} */
export const BookEventType = {
  UNKNOWN: 'BOOK_EVENT_UNKNOWN',
  PAGE_EXTRACTED: 'BOOK_EVENT_PAGE_EXTRACTED',
  PROGRESS: 'BOOK_EVENT_PROGRESS',
  UNARCHIVE_COMPLETE: 'BOOK_EVENT_UNARCHIVE_COMPLETE',
  BINDING_COMPLETE: 'BOOK_EVENT_BINDING_COMPLETE',
};

/**
 * The source can be a BookBinder or a Book.
 * @type {{
 *   source: Object,
 *   type: string,
 * }}
 */
export class BookEvent {
  constructor(source) {
    this.source = source;
    this.type = BookEventType.UNKNOWN;
  }
}

export class BookPageExtractedEvent extends BookEvent {
  constructor(source, page, pageNum) {
    super(source);
    this.type = BookEventType.PAGE_EXTRACTED;
    this.page = page;
    this.pageNum = pageNum;
  }
}

export class BookProgressEvent extends BookEvent {
  constructor(source, loadingPct, unarchivingPct, totalPages) {
    super(source);
    this.type = BookEventType.PROGRESS;
    this.loadingPct = loadingPct;
    this.unarchivingPct = unarchivingPct;
    this.totalPages = totalPages;
  }
}

export class BookBindingCompleteEvent extends BookEvent {
  constructor(source, pages) {
    super(source);
    this.pages = pages;
    this.type = BookEventType.BINDING_COMPLETE;
  }
}
