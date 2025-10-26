/**
 * Calendar Page JavaScript
 * Event filtering, search, and categorization functionality
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Only run on calendar page
    const eventsList = document.querySelector('.events-list');
    if (!eventsList) return;

    // Create filter UI
    createFilterUI();

    // Initialize filters from URL hash
    initializeFromHash();

    // Set up event listeners
    setupEventListeners();
  }

  function createFilterUI() {
    const eventsSection = document.querySelector('.events-list');
    if (!eventsSection) return;

    // Create filter container
    const filterContainer = document.createElement('div');
    filterContainer.className = 'events-filter';
    filterContainer.innerHTML = `
      <div class="events-filter__controls">
        <div class="events-filter__group">
          <label for="event-search" class="events-filter__label">Search Events:</label>
          <input 
            type="search" 
            id="event-search" 
            class="events-filter__search" 
            placeholder="Search by title or description..."
            aria-label="Search events"
          />
        </div>
        
        <div class="events-filter__group">
          <label for="event-type-filter" class="events-filter__label">Filter by Type:</label>
          <select id="event-type-filter" class="events-filter__select" aria-label="Filter events by type">
            <option value="all">All Events</option>
            <option value="pack-meeting">Pack Meetings</option>
            <option value="den-meeting">Den Meetings</option>
            <option value="campout">Campouts</option>
            <option value="service-project">Service Projects</option>
            <option value="family-event">Family Events</option>
            <option value="fundraiser">Fundraisers</option>
          </select>
        </div>

        <div class="events-filter__group">
          <label for="event-date-filter" class="events-filter__label">Filter by Date:</label>
          <select id="event-date-filter" class="events-filter__select" aria-label="Filter events by date range">
            <option value="all">All Dates</option>
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
            <option value="next-month">Next Month</option>
            <option value="next-3-months">Next 3 Months</option>
          </select>
        </div>

        <button type="button" id="reset-filters" class="btn btn-secondary btn-sm">
          Reset Filters
        </button>
      </div>

      <div class="events-filter__results" role="status" aria-live="polite">
        <span id="results-count"></span>
      </div>
    `;

    // Insert filter UI before events list
    eventsSection.parentNode.insertBefore(filterContainer, eventsSection);
  }

  function setupEventListeners() {
    const searchInput = document.getElementById('event-search');
    const typeFilter = document.getElementById('event-type-filter');
    const dateFilter = document.getElementById('event-date-filter');
    const resetButton = document.getElementById('reset-filters');

    if (searchInput) {
      searchInput.addEventListener('input', debounce(applyFilters, 300));
    }

    if (typeFilter) {
      typeFilter.addEventListener('change', applyFilters);
    }

    if (dateFilter) {
      dateFilter.addEventListener('change', applyFilters);
    }

    if (resetButton) {
      resetButton.addEventListener('click', resetFilters);
    }

    // Handle hash changes (for shareable filtered views)
    window.addEventListener('hashchange', initializeFromHash);
  }

  function applyFilters() {
    const searchTerm = document.getElementById('event-search')?.value.toLowerCase() || '';
    const selectedType = document.getElementById('event-type-filter')?.value || 'all';
    const selectedDate = document.getElementById('event-date-filter')?.value || 'all';

    // Get all event cards
    const eventCards = document.querySelectorAll('.event-card');
    let visibleCount = 0;

    // Get date range for filtering
    const dateRange = getDateRange(selectedDate);

    eventCards.forEach(card => {
      let shouldShow = true;

      // Search filter
      if (searchTerm) {
        const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
        const excerpt = card.querySelector('.card-text')?.textContent.toLowerCase() || '';
        
        if (!title.includes(searchTerm) && !excerpt.includes(searchTerm)) {
          shouldShow = false;
        }
      }

      // Type filter
      if (selectedType !== 'all') {
        const eventType = card.getAttribute('data-event-type');
        if (eventType !== selectedType) {
          shouldShow = false;
        }
      }

      // Date filter
      if (selectedDate !== 'all' && dateRange) {
        const eventDate = new Date(card.getAttribute('data-event-date'));
        if (eventDate < dateRange.start || eventDate > dateRange.end) {
          shouldShow = false;
        }
      }

      // Show/hide card
      if (shouldShow) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Update results count
    updateResultsCount(visibleCount, eventCards.length);

    // Update URL hash (for shareable filtered views)
    updateHash(searchTerm, selectedType, selectedDate);
  }

  function getDateRange(filterType) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    switch (filterType) {
      case 'this-week':
        const weekEnd = new Date(today);
        weekEnd.setDate(weekEnd.getDate() + 7);
        return { start: today, end: weekEnd };

      case 'this-month':
        const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        return { start: today, end: monthEnd };

      case 'next-month':
        const nextMonthStart = new Date(today.getFullYear(), today.getMonth() + 1, 1);
        const nextMonthEnd = new Date(today.getFullYear(), today.getMonth() + 2, 0);
        return { start: nextMonthStart, end: nextMonthEnd };

      case 'next-3-months':
        const threeMonthsEnd = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate());
        return { start: today, end: threeMonthsEnd };

      default:
        return null;
    }
  }

  function updateResultsCount(visible, total) {
    const resultsCount = document.getElementById('results-count');
    if (!resultsCount) return;

    if (visible === total) {
      resultsCount.textContent = `Showing all ${total} events`;
    } else {
      resultsCount.textContent = `Showing ${visible} of ${total} events`;
    }
  }

  function resetFilters() {
    // Reset all filter inputs
    const searchInput = document.getElementById('event-search');
    const typeFilter = document.getElementById('event-type-filter');
    const dateFilter = document.getElementById('event-date-filter');

    if (searchInput) searchInput.value = '';
    if (typeFilter) typeFilter.value = 'all';
    if (dateFilter) dateFilter.value = 'all';

    // Clear hash
    history.pushState(null, '', window.location.pathname);

    // Apply filters (will show all)
    applyFilters();
  }

  function initializeFromHash() {
    const hash = window.location.hash.substring(1);
    if (!hash) return;

    // Parse hash parameters (format: #search=term&type=pack-meeting&date=this-month)
    const params = new URLSearchParams(hash);
    
    const searchInput = document.getElementById('event-search');
    const typeFilter = document.getElementById('event-type-filter');
    const dateFilter = document.getElementById('event-date-filter');

    if (params.get('search') && searchInput) {
      searchInput.value = params.get('search');
    }

    if (params.get('type') && typeFilter) {
      typeFilter.value = params.get('type');
    }

    if (params.get('date') && dateFilter) {
      dateFilter.value = params.get('date');
    }

    applyFilters();
  }

  function updateHash(search, type, date) {
    const params = new URLSearchParams();
    
    if (search) params.set('search', search);
    if (type !== 'all') params.set('type', type);
    if (date !== 'all') params.set('date', date);

    const hash = params.toString();
    if (hash) {
      history.replaceState(null, '', `#${hash}`);
    } else {
      history.replaceState(null, '', window.location.pathname);
    }
  }

  // Utility: Debounce function for search input
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Add data attributes to event cards for filtering
  function initializeEventCards() {
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach(card => {
      // Extract event type from badge if not already set
      if (!card.getAttribute('data-event-type')) {
        const badge = card.querySelector('.badge');
        if (badge) {
          // Extract type from badge class (e.g., 'badge-pack-meeting' -> 'pack-meeting')
          const badgeClass = Array.from(badge.classList).find(cls => cls.startsWith('badge-'));
          if (badgeClass) {
            const eventType = badgeClass.replace('badge-', '');
            card.setAttribute('data-event-type', eventType);
          }
        }
      }

      // Extract event date if not already set
      if (!card.getAttribute('data-event-date')) {
        const dateElement = card.querySelector('.event-card__date');
        if (dateElement) {
          // Try to parse date from time element or text content
          const timeElement = dateElement.querySelector('time');
          if (timeElement && timeElement.getAttribute('datetime')) {
            card.setAttribute('data-event-date', timeElement.getAttribute('datetime'));
          }
        }
      }
    });
  }

  // Initialize event cards data attributes
  initializeEventCards();

})();
