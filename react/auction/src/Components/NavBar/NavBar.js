import './NavBar.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class StickyNavigation {

	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function(event) {
			self.onTabClick(event, $(this));
		});
		$(window).scroll(() => { this.onScroll(); });
	}

	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}

	onScroll() {
		this.checkTabContainerPosition();
	}

	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		}
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}

}

new StickyNavigation();

function NavBar() {
    return (
        <div>
          <section className="et-hero-tabs">
            <h1>UTD TEKRAM Auction</h1>
            <h3>Listing, bidding, selling, as easy as it gets</h3>
            <div className="et-hero-tabs-container">
              <Link to='/' className="et-hero-tab" href="">Home</Link>
              <Link to='' className="et-hero-tab" href="">Contact Us</Link>
              <Link to='' className="et-hero-tab" href="">My Account</Link>
              <Link to='' className="et-hero-tab" href="">FAQ</Link>
              <span className="et-hero-tab-slider"></span>
            </div>
          </section>
        </div>
    );
}

export default NavBar;