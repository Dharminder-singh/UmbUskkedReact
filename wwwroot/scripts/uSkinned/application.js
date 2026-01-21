// Author: uSkinned
// License: uSkinned Commercial License (https://uSkinned.net/license)

$(document).ready(function() {

	// Notification
	var cookiePanel = $('.usn-notification'), cookieName = "USN_Notification";

	var notificationValue = getCookie(cookieName);
	if (notificationValue != null && notificationValue != "") {
		cookiePanel.addClass("closed");
		cookiePanel.removeClass("open");
	} else {
		cookiePanel.addClass("open");
		cookiePanel.removeClass("closed");
	}

	// Accept notification
	$('.accept-cookies').on('click', function (e) {
		e.preventDefault();
		setCookie(cookieName, 1, notificationExDays);
		cookiePanel.addClass("closed");
		cookiePanel.removeClass("open");
	});

	// Lazysizes
	$('img.lazyload').addClass('lazypreload');

	// Main Navigation
	$("nav.main ul li .expand-subpages").click(function (e) {
		e.preventDefault();
		$(this).parent().toggleClass("open-child").toggleClass("open-child_mobile");
		$(this).attr('aria-expanded', function (i, attr) {
			return attr == 'true' ? 'false' : 'true'
		});
        $(this).parent().siblings().removeClass("open-child").removeClass("open-child_mobile");
	});
	$("nav.main ul li:last a").on("blur", function (e) {
		e.preventDefault();
		$("nav.main ul li .expand-subpages").attr('aria-expanded', 'false');
        $("nav.main ul li").removeClass("open-child").removeClass("open-child_mobile");
	});
	$("nav.main ul li.has-child.active").addClass("open-child_mobile");
	$("html").click(function() {
		$("nav.main ul li.open-child").removeClass("open-child");
	});
	$("nav.main ul li .expand-subpages, header#site-header .expand-header").click(function(e) {
		e.stopPropagation();
	});

	// Expand Burger Navigation  
	$("header#site-header .expand-header").click(function() {
		$("header#site-header .expand-header").toggleClass('active');
		$("html").toggleClass('reveal-out');
		$("header#site-header .expand-header").attr('aria-expanded', function (i, attr) {
			return attr == 'true' ? 'false' : 'true'
		});
	});
	$("#site-content, footer#site-footer").click(function() {
		$("html").removeClass("reveal-out");
		$("header#site-header .expand-header").removeClass("active");
		$("header#site-header .expand-header").attr('aria-expanded', 'false');
	});
	$("#site-content, #site-content *, footer#site-footer, footer#site-footer *").focusin(function() {
		$("html").removeClass("reveal-out");
		$("header#site-header .expand-header").removeClass("active");
		$("header#site-header .expand-header").attr('aria-expanded', 'false');
	});

	// Expand Anchor Mobile Navigation  
	$(".component.usn_cmp_anchornavigation .expand-anchor").click(function() {
		$(".component.usn_cmp_anchornavigation .expand-anchor").toggleClass('anchor-active');
		$(".component.usn_cmp_anchornavigation nav").toggleClass('open-mobile');
		$(".component.usn_cmp_anchornavigation .expand-anchor").attr('aria-expanded', function (i, attr) {
			return attr == 'true' ? 'false' : 'true'
		});
	});

	// Expand header search 
	$("header#site-header .site-search .expand-search").click(function() {
		$("header#site-header .site-search").toggleClass('open-search');
		$("header#site-header .site-search .form-control").focus();
		$("header#site-header .site-search .expand-search").attr('aria-expanded', function (i, attr) {
			return attr == 'true' ? 'false' : 'true'
		});
	});
	$("html").click(function() {
		$("header#site-header .site-search").removeClass("open-search");
		$("header#site-header .site-search .expand-search").attr('aria-expanded', 'false');
	});
	$("header#site-header .site-search").click(function(e) {
		e.stopPropagation();
	});

	// Sub Navigation
	$("nav.sub ul li .expand-subpages").click(function (e) {
		e.preventDefault();
		$(this).parent().toggleClass("open-child");
		$(this).attr('aria-expanded', function (i, attr) {
			return attr == 'true' ? 'false' : 'true'
		});
		$(this).parent().siblings().removeClass("open-child");
	});
	$("nav.sub ul li:last a").on("blur", function (e) {
		e.preventDefault();
		$("nav.sub ul li .expand-subpages").attr('aria-expanded', 'false');
		$("nav.sub ul li").removeClass("open-child");
	});
	$("nav.sub ul li.has-child.active").addClass("open-child");

	// Expand In this section
	$(".in-this-section .expand-sub").click(function() {
		$(".in-this-section .expand-sub").toggleClass('active');
		$(".in-this-section nav.sub").toggleClass('open');
		$(".in-this-section .expand-sub").attr('aria-expanded', function (i, attr) {
			return attr == 'true' ? 'false' : 'true'
		});
	});

	// Expand Filters on Listing & Shop
	$(".listing_filter-form .expand-filters").click(function () {
		$(".listing_filter-form .expand-filters").toggleClass('active');
		$(".listing_filter-form .filter-form_inner").toggleClass('open');
		$(".listing_filter-form .expand-filters").attr('aria-expanded', function (i, attr) {
			return attr == 'true' ? 'false' : 'true'
		});
	});

	//RTL for Slick
	function rtl_slick(){
		if(jQuery("html").is('[dir="rtl"]')) {
			return true;
		} else {
			return false;
	}}

	// BANNER
	// PLAYS VIDEO IN BANNER
	$('.usn_cmp_banner .slides').on('init', function(slick){
		$('.usn_cmp_banner video').each(function () {
			this.play();
		});
	});
	// ALL CAROUSELS
    $(".slides").slick({
		rtl: rtl_slick(),
		infinite: true,
		speed: 600,
		adaptiveHeight: true,
		prevArrow: '<button class="slick-prev" type="button">'
					+ '<i aria-hidden="true" class="icon"></i>'
					+ '<span class="visually-hidden">Previous</span>'
				 	+ '</button>',
		nextArrow: '<button class="slick-next" type="button">'
					+ '<i aria-hidden="true" class="icon"></i>'
					+ '<span class="visually-hidden">Next</span>'
					+ '</button>',
		playIcon: '<i aria-hidden="true" class="icon usn_ion-md-play"></i>',
		pauseIcon: '<i aria-hidden="true" class="icon usn_ion-md-pause"></i>'
	});

	// Alert boxes
	// Remove component entirely when alert is closed
	$('.component .alert .close').on('click', function(c){
		$(this).closest('.component:not(.usn_cmp_splitcomponent)').addClass('d-none', function(c){});
	});	
	// Remove pod entirely when alert is closed
	$('.left-col .usn_pod_alertbox.swp-item .alert .close, .right-col .usn_pod_alertbox.swp-item .alert .close').on('click', function(c){
		$(this).closest('.usn_pod_alertbox').addClass('d-none', function(c){});
	});	

	// Back to top link
	$("#back-to-top-link").click(function() {
		$('html,body').animate({scrollTop:0},'slow');
		$("header#site-header").focus();
		return false;
    });


    // Define arrays for different header types
    const headerNoOffsetClasses = ['no-header', 'hide_header-on-scroll-lg', 'header-11-lg', 'header-12-lg', 'header-15-lg', 'header-16-lg'];
    const headerHalfOffsetClasses = ['header-04-lg', 'header-05-lg', 'header-09-lg', 'header-10-lg', 'header-13-lg', 'header-14-lg', 'header-18-lg'];

	// Anchor Navigation
    // Offset with Header on display
	var sections = $('section'), 
	nav = $('.component.usn_cmp_anchornavigation'), 
	anchor_nav_height = $('.component.usn_cmp_anchornavigation').outerHeight()
	nav_height = $('header#site-header').outerHeight();
	nav_height_half = $('header#site-header').outerHeight() / 2;
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function () {
            var offsetAdjustment = 0;
            if ($('body').is('.' + headerNoOffsetClasses.join(', .'))) {
                offsetAdjustment = anchor_nav_height;
            } else {
                offsetAdjustment = anchor_nav_height + nav_height;
            }
            var top = $(this).offset().top - offsetAdjustment;
            var bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');
                $(this).addClass('active');
                nav.find(`a[href="#${$(this).attr('id')}"]`).addClass('active');
            }
        });
    });
    nav.find('a').on('click', function () {
        var anchorNav = $('.component.usn_cmp_anchornavigation');
        var $el = $(this);
        var href = $el.attr('href');
        var offset = 0;
        if (anchorNav.hasClass('sticky')) {
            if ($('body').is('.' + headerNoOffsetClasses.join(', .'))) {
                offset = anchor_nav_height - 1;
            } else if ($('body').is('.' + headerHalfOffsetClasses.join(', .'))) {
                offset = anchor_nav_height + nav_height_half - 1;
            } else {
                offset = anchor_nav_height + nav_height - 1;
            }
        } else {
            offset = nav_height_half;
        }
        $(".component.usn_cmp_anchornavigation .expand-anchor").removeClass('anchor-active').attr('aria-expanded', 'false');
        $(".component.usn_cmp_anchornavigation nav").removeClass('open-mobile');
        $('html, body').animate({
            scrollTop: $(href).offset().top - offset
        }, 600);
        return false;
    });

    // Scroll Prompt
    $('.scroll-prompt').click(function () {
        // Find the next section or item after the current one
        var target = $(this).nextAll("section, section.usn_cmp_banner .item").first();

        // If a next section/item exists, scroll to it
        if (target.length) {
            // Scroll directly to the element's offset
            $('html, body').animate({ scrollTop: target.offset().top }, 600);
        }
    });


    // Function to get the scroll target based on the nav height
	function getScrollTarget(navHeight = 0) {
		let target = 0;
		$("section, section.usn_cmp_banner .item").nextAll("section, section.usn_cmp_banner .item").each(function (i, element) {
			target = $(element).offset().top - navHeight;
			if (target - 10 > $(document).scrollTop()) {
				return false; // Break loop
			}
		});
		return target;
	}
	// Function to animate scroll
	function animateScroll(target, duration = 600) {
		$("html, body").animate({ scrollTop: target }, duration);
	}
	$('.scroll-prompt').click(function () {
		let target;
		if ($('body').is('.' + headerNoOffsetClasses.join(', .'))) {
			target = getScrollTarget(); // No nav height offset
		} else if ($('body').is('.' + headerHalfOffsetClasses.join(', .'))) {
			target = getScrollTarget(nav_height_half); // Half nav height offset
		} else {
			target = getScrollTarget(nav_height); // Full nav height offset
		}
		animateScroll(target); // Animate the scroll to the target
	});


    // Create smoothscroll links when a # is used.
    // Function to get base offset for scroll
    function getBaseOffset() {
        if ($('body').is('.' + headerNoOffsetClasses.join(', .'))) {
            return 0; // No additional offset
        } else if ($('body').is('.' + headerHalfOffsetClasses.join(', .'))) {
            return nav_height_half; // Half nav height offset
        } else {
            return nav_height; // Full nav height offset
        }
    }
    $(function () {
        $('a:not([data-bs-toggle="tab"]):not([data-bs-toggle="dropdown"]):not(.nav-anchor-link):not(.nav-button-link):not([data-bs-toggle="modal"])')
            .click(function (event) {
                const samePage = location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname;
                if (samePage) {
                    var target = $(this.hash);
                    target = target.length ? target : (this.hash.length ? $('[name=' + this.hash.slice(1) + ']') : '');
                    if (target.length) {
                        // Calculate navigation offset if anchor navigation is present
                        const anchorNavOffset = $('.usn_cmp_anchornavigation').outerHeight() || 0;
                        // Get the base offset for scrolling
                        const baseOffset = getBaseOffset();
                        // Clear header-related classes
                        $('html').removeClass('reveal-out');
                        $('header#site-header .expand-header').removeClass('active');
                        // Animate scroll to the target position with calculated offsets
                        $('html, body').animate({
                            scrollTop: target.offset().top - baseOffset - anchorNavOffset + 1
                        }, 600); // Animation duration in milliseconds
                        event.preventDefault(); // Prevent default link behavior
                    }
                }
            });
    });

	// Modal windows
    // Trigger slick carousel and lazyframe when used inside modal
	$('.modal').on('shown.bs.modal', function (e) {
		$('.slides').slick('setPosition');
		lazyframe('.lazyframe-video');
        $('html').addClass('modal-open');
	})
    $('.modal').modal('handleUpdate')
    $('.modal').on('hidden.bs.modal', function () {
        $('html').removeClass('modal-open');
    })

});


// Mega menu 
document.addEventListener('DOMContentLoaded', (event) => {
    let openModalsCount = 0; // Track the number of open modals

    function addModalEventListeners() {
        // Event delegation to handle any modal links within the nav.main
        const mainNav = document.querySelector('nav.main');
        if (mainNav) {
            mainNav.addEventListener('click', function (e) {
                if (e.target.matches('[data-bs-toggle="modal"]')) {
                    var modalSelector = e.target.getAttribute('href');
                    var myModal = document.querySelector(modalSelector);

                    if (myModal) {
                        // Increment the open modals count
                        openModalsCount++;

                        // Add the class immediately when the link is clicked
                        document.body.classList.add('mega-menu-modal');

                        // Ensure the class is removed once the modal is hidden
                        myModal.addEventListener('hidden.bs.modal', function () {
                            openModalsCount--;

                            // Only remove the class if no modals are open
                            if (openModalsCount === 0) {
                                document.body.classList.remove('mega-menu-modal');
                            }
                        }, { once: true }); // Ensure this is triggered only once per modal closing
                    }
                }
            });
        }

        // Function to close modals if any are open
        function closeOpenModals() {
            if (openModalsCount > 0) {
                // Find all open modals and close them
                const modals = document.querySelectorAll('.modal.show');
                modals.forEach(modal => {
                    const modalInstance = bootstrap.Modal.getInstance(modal);
                    if (modalInstance) {
                        modalInstance.hide(); // Close the modal programmatically
                    }
                });
            }
        }

        // Check if the header#site-header element exists before adding event listener
        const siteHeader = document.querySelector('header#site-header');
        if (siteHeader) {
            if (!siteHeader.hasEventListener) {
                siteHeader.addEventListener('click', function (e) {
                    closeOpenModals();
                });
                siteHeader.hasEventListener = true; // Custom flag to track the event listener
            }

            // Check if the .site-search element exists within header#site-header
            const siteSearch = siteHeader.querySelector('.site-search');
            if (siteSearch) {
                if (!siteSearch.hasEventListener) {
                    siteSearch.addEventListener('click', function (e) {
                        closeOpenModals();

                        // Add a small delay to allow modal to close properly before focusing the input
                        setTimeout(() => {
                            // Focus the input inside header#site-header .site-search after modal closes
                            const searchInput = siteSearch.querySelector('input');
                            if (searchInput) {
                                searchInput.focus();
                            }
                        }, 500); // Adjust the delay time if needed, 300ms should be sufficient
                    });
                    siteSearch.hasEventListener = true; // Custom flag to track the event listener
                }
            }
        }
    }

    // Immediately check if the class exists, and if so, add event listeners
    if (document.body.classList.contains('main-nav_mega-modal')) {
        addModalEventListeners();
    } else {
        // If the class does not exist, set up a MutationObserver to detect when it gets added
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    // Check if the class 'main-nav_mega-modal' was added
                    if (document.body.classList.contains('main-nav_mega-modal')) {
                        addModalEventListeners();
                        // Once the event listeners are added, you can stop observing
                        observer.disconnect();
                    }
                }
            }
        });

        // Start observing the body element for attribute changes (to catch class changes)
        observer.observe(document.body, { attributes: true });
    }
});




// Tooltips
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
})

var usnVisualDesigner = false;
var visualDesignerModal;

function usnSyncListingSearchText(value, position, formId) {
	switch (position) {
		case "sidebar":
			var $form = $('#ListSearchForm_above_' + formId);
			var form = $form.get(0);
			var textbox = form.querySelector("[id ^= 'filter_text']");
			textbox.value = value;
			break;
		case "above":
			var $form = $('#ListSearchForm_sidebar_' + formId);
			var form = $form.get(0);
			var textbox = form.querySelector("[id ^= 'filter_text']");
			textbox.value = value;
			break;
	}

}

function usnSyncListingSort(value, position, formId) {
	switch (position) {
		case "sidebar":
			var $form = $('#ListSearchForm_above_' + formId);
			var form = $form.get(0);
			var dropdown = form.querySelector("[id ^= 'filter_sort_order']");
			dropdown.selectedIndex = value;
			break;
		case "above":
			var $form = $('#ListSearchForm_sidebar_' + formId);
			var form = $form.get(0);
			var dropdown = form.querySelector("[id ^= 'filter_sort_order']");
			dropdown.selectedIndex = value;
			break;
	}

}

function usnSyncListingSearchDropdown(value, position, groupId, formId) {

	switch (position) {
		case "sidebar":
			var $form = $('#ListSearchForm_above_' + formId);
			var form = $form.get(0);
			var dropdown = form.querySelector("[id ^= 'filter_dropdown_above_" + groupId + "']");
			dropdown.selectedIndex = value;
			var groupDiv = dropdown.closest('div.dropdown_filter');
			var selectedSpan = groupDiv.querySelector(".selected-count");
			if (value == 0) {
				selectedSpan.innerHTML = "0";
			}
			else {
				selectedSpan.innerHTML = "1";
			}

			break;
		case "above":
			var $form = $('#ListSearchForm_sidebar_' + formId);
			var form = $form.get(0);
			var dropdown = form.querySelector("[id ^= 'filter_dropdown_sidebar_" + groupId + "']");
			dropdown.selectedIndex = value;
			var groupDiv = dropdown.closest('div.dropdown_filter');
			var selectedSpan = groupDiv.querySelector(".selected-count");
			if (value == 0) {
				selectedSpan.innerHTML = "0";
			}
			else {
				selectedSpan.innerHTML = "1";
			}

			break;
	}

}

function usnSubmitListingForm(position, formId, isTextSearch) {

	if (!usnVisualDesigner) {
		const $form = $('#ListSearchForm_' + position + "_" + formId);
		const form = $form.get(0);
		const searchParams = new URLSearchParams();

		var otherForm;

		switch (position) {
			case "sidebar":
				var $otherForm = $('#ListSearchForm_above_' + formId);
				var otherForm = $otherForm.get(0);
				break;
			case "above":
				var $otherForm = $('#ListSearchForm_sidebar_' + formId);
				var otherForm = $otherForm.get(0);
				break;
		}

		let selectedFilters = [];

		//get text search value
		const textbox = form.querySelector("[id ^= 'filter_text']");
		if (textbox && textbox.value !== "") {
			searchParams.set("text", textbox.value);
			usnAddOption("filter_sort_order_" + position, "relevance_ascending", usnRelevanceText);
		}
		else {
			usnRemoveOption("filter_sort_order_" + position, "relevance_ascending");
		}

		const sortDropdown = form.querySelector("[id ^= 'filter_sort_order']");

		if (sortDropdown) {
			const selectedSortOption = sortDropdown.options[sortDropdown.selectedIndex];
			if (selectedSortOption.value !== "") {
				searchParams.set("sort", selectedSortOption.value);
			}

			//If this is a text search and the textbox is not empty, set the sort to relevance
			if (isTextSearch && textbox && textbox.value !== "") {
				searchParams.set("sort", "relevance_ascending");
				sortDropdown.value = "relevance_ascending";
			}
		}

		//get all checkbox groups within the form
		const checkboxGroups = form.querySelectorAll(".checkbox_filter");

		//get selected filter ids
		checkboxGroups.forEach(group => {

			let selectedCount = 0;

			const checkboxes = group.querySelectorAll("input[type='checkbox']");
			checkboxes.forEach(checkbox => {
				if (checkbox.checked) {
					selectedFilters.push(checkbox.value);
					selectedCount += 1;
				}
			});

			let selectedSpan = group.querySelector(".selected-count");
			selectedSpan.innerHTML = selectedCount;
		});

		//get all radio groups within the form
		const radioGroups = form.querySelectorAll(".radio_filter");

		//get selected filter ids
		radioGroups.forEach(group => {

			let selectedCount = 0;

			const radios = group.querySelectorAll("input[type='radio']");
			radios.forEach(checkbox => {
				if (checkbox.checked) {
					selectedFilters.push(checkbox.value);
					selectedCount += 1;
				}
			});

			let selectedSpan = group.querySelector(".selected-count");
			selectedSpan.innerHTML = selectedCount;
		});

		//get all dropdown groups with the form
		const dropdownGroups = form.querySelectorAll(".dropdown_filter");

		//get selected filter ids
		dropdownGroups.forEach(group => {

			let selectedCount = 0;

			const dropdown = group.querySelector("select");
			if (dropdown.selectedIndex >= 0) {
				const selectedOption = dropdown.options[dropdown.selectedIndex];
				if (selectedOption.value !== "") {
					selectedFilters.push(selectedOption.value);
					selectedCount = 1;
				}
			}

			let selectedSpan = group.querySelector(".selected-count");
			selectedSpan.innerHTML = selectedCount;

		});

		if (otherForm !== undefined) {

			//get all checkbox groups within the form
			const othercheckboxGroups = otherForm.querySelectorAll(".checkbox_filter");

			//get selected filter ids
			othercheckboxGroups.forEach(group => {

				let selectedCount = 0;

				const othercheckboxes = group.querySelectorAll("input[type='checkbox']");
				othercheckboxes.forEach(checkbox => {
					if (selectedFilters.includes(checkbox.value)) {
						checkbox.checked = true;
						selectedCount += 1;
					}
					else {
						checkbox.checked = false;
					}
				});

				let selectedSpan = group.querySelector(".selected-count");
				selectedSpan.innerHTML = selectedCount;
			});

			//get all radio groups within the form
			const otherradioGroups = otherForm.querySelectorAll(".radio_filter");

			//get selected filter ids
			otherradioGroups.forEach(group => {

				let selectedCount = 0;

				const otherradios = group.querySelectorAll("input[type='radio']");
				otherradios.forEach(checkbox => {
					if (selectedFilters.includes(checkbox.value)) {
						checkbox.checked = true;
						selectedCount += 1;
					}
					else {
						checkbox.checked = false;
					}
				});

				let selectedSpan = group.querySelector(".selected-count");
				selectedSpan.innerHTML = selectedCount;
			});
		}

		if (selectedFilters.length > 0) {
			searchParams.set("filter", selectedFilters);
		}

		const newRelativePathQuery = '?' + searchParams.toString();
		history.pushState(null, '', newRelativePathQuery);

		var url = $form.attr("action");

		$.ajax({
			type: "POST",
			url: url,
			data: $form.serialize(),
			beforeSend: function () {
				$('#ListingLoading_' + formId).show();
			},
			success: function (data) {
				$('#ListContainer_' + formId).html(data);
			},
			complete: function () {
				$('#ListingLoading_' + formId).hide();
			}
		});
	}
	else {
		if (usnVisualDesigner) {
			visualDesignerModal = new bootstrap.Modal(document.getElementById('usn_preview_modal'));
			visualDesignerModal.show();
		}
	}
	
}

function usnResetFilterByNameGroup(position, groupName,formId) {

	const form = document.getElementById('ListSearchForm_' + position + '_' + formId);

	var items = form.querySelectorAll('input[name = "' + groupName +'"]');
	for (var i = 0; i < items.length; i++) {
		items[i].checked = false;
	}

	usnSubmitListingForm(position, formId)
}


function usnResetFilterDropdown(position, groupId, formId) {

	const dropdown = document.getElementById('filter_dropdown_' + position + '_' + groupId);
	dropdown.value = "";

	switch (position) {
		case "sidebar":
			var abovedropdown = document.getElementById('filter_dropdown_above_' + groupId);
			abovedropdown.value = "";

			var groupDiv = abovedropdown.closest('div.dropdown_filter');
			var selectedSpan = groupDiv.querySelector(".selected-count");
			selectedSpan.innerHTML = "0";


			break;
		case "above":
			var sidedropdown = document.getElementById('filter_dropdown_sidebar_' + groupId);
			sidedropdown.value = "";

			var groupDiv = sidedropdown.closest('div.dropdown_filter');
			var selectedSpan = groupDiv.querySelector(".selected-count");
			selectedSpan.innerHTML = "0";

			break;
	}

	usnSubmitListingForm(position, formId);
}

function usnClearAllFilters(formId) {

	var $aboveform = $('#ListSearchForm_above_' + formId);
	var aboveform = $aboveform.get(0);

	var $sideform = $('#ListSearchForm_sidebar_' + formId);
	var sideform = $sideform.get(0);

	var $fullform = $('#ListSearchForm_full-width_' + formId);
	var fullform = $fullform.get(0);

	if (fullform === undefined) {

		if (aboveform !== undefined) {

			//get all filters within the form
			const aboveformradioGroups = aboveform.querySelectorAll(".radio_filter");
			const aboveformcheckboxGroups = aboveform.querySelectorAll(".checkbox_filter");
			const aboveformdropdownGroups = aboveform.querySelectorAll(".dropdown_filter");

			//get selected filter ids
			aboveformradioGroups.forEach(group => {

				const aboveformradios = group.querySelectorAll("input[type='radio']");
				aboveformradios.forEach(checkbox => {
					checkbox.checked = false;
				});

				let selectedSpan = group.querySelector(".selected-count");
				selectedSpan.innerHTML = 0;
			});

			//get selected filter ids
			aboveformcheckboxGroups.forEach(group => {

				const aboveformcheckbox = group.querySelectorAll("input[type='checkbox']");
				aboveformcheckbox.forEach(checkbox => {
					checkbox.checked = false;
				});

				let selectedSpan = group.querySelector(".selected-count");
				selectedSpan.innerHTML = 0;
			});

			//get selected filter ids
			aboveformdropdownGroups.forEach(group => {

				var abovedropdown = group.querySelector('select');
				abovedropdown.value = "";
				let selectedSpan = group.querySelector(".selected-count");
				selectedSpan.innerHTML = 0;
			});

			var textboxAbove = aboveform.querySelector("[id ^= 'filter_text']");
			textboxAbove.value = "";
		}

		if (sideform !== undefined) {
            //get all filters within the form
			const sideformcheckboxGroups = sideform.querySelectorAll(".checkbox_filter");
			const sideformradioGroups = sideform.querySelectorAll(".radio_filter");
			const sideformdropdownGroups = sideform.querySelectorAll(".dropdown_filter");

			//get selected filter ids
			sideformradioGroups.forEach(group => {

				const sideformradios = group.querySelectorAll("input[type='radio']");
				sideformradios.forEach(checkbox => {
					checkbox.checked = false;
				});

				let selectedSpan = group.querySelector(".selected-count");
				selectedSpan.innerHTML = 0;
			});

			//get selected filter ids
			sideformcheckboxGroups.forEach(group => {

				const sideformcheckbox = group.querySelectorAll("input[type='checkbox']");
				sideformcheckbox.forEach(checkbox => {
					checkbox.checked = false;
				});

				let selectedSpan = group.querySelector(".selected-count");
				selectedSpan.innerHTML = 0;
			});


			//get selected filter ids
			sideformdropdownGroups.forEach(group => {

				var abovedropdown = group.querySelector('select');
				abovedropdown.value = "";
				let selectedSpan = group.querySelector(".selected-count");
				selectedSpan.innerHTML = 0;
			});

			var textboxSide = sideform.querySelector("[id ^= 'filter_text']");
			textboxSide.value = "";
		}

		usnSubmitListingForm('above', formId);
	}
	else {
		//get all radio groups within the form
		const fullformradioGroups = fullform.querySelectorAll(".radio_filter");
		//get all checkbox groups within the form
		const fullformcheckboxGroups = fullform.querySelectorAll(".checkbox_filter");
		//get all dropdown groups within the form
		const fullformdropdownGroups = fullform.querySelectorAll(".dropdown_filter");

		//get selected filter ids
		fullformradioGroups.forEach(group => {

			const fullformradios = group.querySelectorAll("input[type='radio']");
			fullformradios.forEach(checkbox => {
				checkbox.checked = false;
			});

			let selectedSpan = group.querySelector(".selected-count");
			selectedSpan.innerHTML = 0;
		});

		//get selected filter ids
		fullformcheckboxGroups.forEach(group => {

			const fullformcheckbox = group.querySelectorAll("input[type='checkbox']");
			fullformcheckbox.forEach(checkbox => {
				checkbox.checked = false;
			});

			let selectedSpan = group.querySelector(".selected-count");
			selectedSpan.innerHTML = 0;
		});

		//get selected filter ids
		fullformdropdownGroups.forEach(group => {

			var fulldropdown = group.querySelector('select');
			fulldropdown.value = "";
			let selectedSpan = group.querySelector(".selected-count");
			selectedSpan.innerHTML = 0;
		});

		var textbox = fullform.querySelector("[id ^= 'filter_text']");
		if (textbox !== null) {
			textbox.value = "";
		}

		usnSubmitListingForm('full-width', formId);

	}

	var url = new URL(window.location.href);

	// Clear a query string parameter
	url.searchParams.delete('filter');

	// Replace the current URL without reloading
	history.replaceState(null, null, url);

}

function usnRemoveFilter(formId, filterId, groupId, filterType, pageLayout) {

	if (pageLayout == 'pageLayoutFull') {
		switch (filterType) {
			case "dropdown":
				const dropdown = document.getElementById('filter_dropdown_full-width_' + groupId);
				dropdown.value = "";
				break;
			case "checkbox":
				const checkboxes = document.getElementsByName('filter_check_full-width_' + groupId);
				checkboxes.forEach(checkbox => {
					if (checkbox.value == filterId && checkbox.checked) {
						checkbox.checked = false;
					}
				});
				break;
			case "radio":
				const radios = document.getElementsByName('filter_radio_full-width_' + groupId);
				radios.forEach(radio => {
					if (radio.value == filterId && radio.checked) {
						radio.checked = false;
					}
				});
				break;
		}

		usnSubmitListingForm('full-width', formId);
	}
	else {
		switch (filterType) {
			case "dropdown":
				const dropdownAbove = document.getElementById('filter_dropdown_above_' + groupId);
				dropdownAbove.value = "";
				var groupDivAbove = dropdownAbove.closest('div.dropdown_filter');
				var selectedSpanAbove = groupDivAbove.querySelector(".selected-count");
				selectedSpanAbove.innerHTML = "0";
				const dropdownSide = document.getElementById('filter_dropdown_sidebar_' + groupId);
				dropdownSide.value = "";
				var groupDivSide = dropdownSide.closest('div.dropdown_filter');
				var selectedSpanSide = groupDivSide.querySelector(".selected-count");
				selectedSpanSide.innerHTML = "0";
				break;
			case "checkbox":
				const checkboxesAbove = document.getElementsByName('filter_check_above_' + groupId);
				checkboxesAbove.forEach(checkbox => {
					if (checkbox.value == filterId && checkbox.checked) {
						checkbox.checked = false;
					}
				});
				const checkboxesSide = document.getElementsByName('filter_check_sidebar_' + groupId);
				checkboxesSide.forEach(checkbox => {
					if (checkbox.value == filterId && checkbox.checked) {
						checkbox.checked = false;
					}
				});
				break;
			case "radio":
				const radiosAbove = document.getElementsByName('filter_radio_above_' + groupId);
				radiosAbove.forEach(radio => {
					if (radio.value == filterId && radio.checked) {
						radio.checked = false;
					}
				});
				const radiosSide = document.getElementsByName('filter_radio_sidebar_' + groupId);
				radiosSide.forEach(radio => {
					if (radio.value == filterId && radio.checked) {
						radio.checked = false;
					}
				});
				break;
		}

		usnSubmitListingForm('above', formId);
	}

	

}

function usnRemoveTextFilter(formId, pageLayout) {

	if (pageLayout == 'pageLayoutFull') {
		var $form = $('#ListSearchForm_full-width_' + formId);
		var form = $form.get(0);
		var textbox = form.querySelector("[id ^= 'filter_text']");
		textbox.value = "";
		usnSubmitListingForm('full-width', formId);
	}
	else {
		var $formabove = $('#ListSearchForm_above_' + formId);
		var formabove = $formabove.get(0);
		var textboxAbove = formabove.querySelector("[id ^= 'filter_text']");
		textboxAbove.value = "";

		var $formside = $('#ListSearchForm_sidebar_' + formId);
		var formside = $formside.get(0);
		var textboxSide = formside.querySelector("[id ^= 'filter_text']");
		textboxSide.value = "";
		usnSubmitListingForm('above', formId);
	}

}


function usnRemoveOption(selectId, optionValue) {
	var select = document.getElementById(selectId);

	if (select) { 
		var options = select.options;
		for (var i = 0; i < options.length; i++) {
			if (options[i].value === optionValue) {
				select.options.remove(i);
				break;
			}
		}
	}
}

function usnAddOption(selectId, optionValue, optionText) {
	var select = document.getElementById(selectId);

	if (select) {
		var options = select.options;
		var found = false;
		for (var i = 0; i < options.length; i++) {
			if (options[i].value === optionValue) {
				found = true;
				break;
			}
		}
		if (!found) {
			var newOption = new Option(optionText, optionValue);
			select.options.add(newOption, select.options[0]);
		}
	}
}

function usnUpdatePrice(position, uniqueId, productId, control) {
	var selectedValue = control.value;

	//get all buttons related to same product
	var snipcartButtons = document.querySelectorAll("button.snpbtn-" + productId);

	//update selected variant value on all buttons related to this product
	for (var i = 0; i < snipcartButtons.length; i++) {
		var button = snipcartButtons[i];
		button.setAttribute("data-item-custom" + position + "-value", selectedValue);
	}

	//get all dropdowns on this page that are the same product and variant as the one that has just been changed
	var allDropdowns = document.querySelectorAll("select.snpdrp-" + productId + "-" + position);

	//update selected value to same as the one that has just been changed
	for (var i = 0; i < allDropdowns.length; i++) {
		allDropdowns[i].value = selectedValue;
	}

	var snipcartButton = document.getElementById("snpbtn-" + uniqueId);

	//get product price
	var originalPrice = snipcartButton.getAttribute("data-item-price");
	var priceChange = 0;
	var newPrice = 0;

	var allVariantDropdowns = document.querySelectorAll("select.snpdrp-" + uniqueId);

	//Loop all variant dropdowns and apply price change
	for (var i = 0; i < allVariantDropdowns.length; i++) {
		
		var dropdown = allVariantDropdowns[i];
		var selectedVariantValue = dropdown.value;
		var options = snipcartButton.getAttribute("data-item-custom" + (i+1) + "-options");
		//if item selected check if price needs changed
		if (selectedVariantValue != '') {

			var array = options.split("|");
			for (x in array) {
				//Check if item contains price change
				var beginPosition = array[x].indexOf("[");
				var endPosition = array[x].indexOf("]");
				if (beginPosition > 1) {
					//check if value is same as dropdown, change price
					var value = array[x].substring(0, beginPosition);
					if (value == selectedVariantValue) {
						priceChange = priceChange + Number(array[x].substring(beginPosition + 1, endPosition));
						break;
					}
				}
			}
		}

	}

	newPrice = usnMoneyOperation(originalPrice,priceChange);

	//update all prices on page with new price
	var priceSpans = document.querySelectorAll("span.price_" + productId);

	for (var i = 0; i < priceSpans.length; i++) {
		priceSpans[i].innerHTML = newPrice; // Replace with the new HTML content
	}
}

function usnMoneyOperation(amount1, amount2) {
	// Convert amounts to whole
	const amount1Whole = Math.round(amount1 * 100);
	const amount2Whole = Math.round(amount2 * 100);

	let totalWhole;

	totalWhole = amount1Whole + amount2Whole;
	
	// Convert the result back
	return totalWhole / 100;
}
