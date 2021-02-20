export default class LoadMoreBtn {
    constructor({ selector, hidden = false }) {
        this.refs = this.getRefs(selector);

        if (hidden) {
            this.refs.button.classList.add('is-hidden');
        }
    }

    getRefs(selector) {
        const refs = {};
        refs.button = document.querySelector(selector);
        refs.label = refs.button.querySelector('.label');
        refs.spinner = refs.button.querySelector('.spinner');

        return refs;
    }

    enable() {
        this.refs.button.disabled = false;
        this.refs.label.textContent = 'Load more...';
        this.refs.spinner.classList.add('is-hidden');
    }

    disable() {
        this.refs.button.disabled = true;
        this.refs.label.textContent = 'Loading...';
        this.refs.spinner.classList.remove('is-hidden');
    }

    show() {
        this.refs.button.classList.remove('is-hidden');  
    }

    hide() {
        this.refs.button.classList.add('is-hidden');
    }
}

// loadMoreBtn - Object!

// const loadMoreBtn = {

//     refs: {
//     button: document.querySelector('[data-action="load-more"]'),
//     label: document.querySelector('[data-action="load-more"] > .label'),
//     spinner: document.querySelector('[data-action="load-more"] > .spinner'),

//     },
//     enable() {
//         this.refs.button.disabled = false;
//         this.refs.label.textContent = 'Load more...';
//         this.refs.spinner.classList.add('is-hidden');
//     },

//     disable() {
//         this.refs.button.disabled = true;
//         this.refs.label.textContent = 'Loading...';
//         this.refs.spinner.classList.remove('is-hidden');
//     },

//     show() {
//         this.refs.button.classList.remove('is-hidden');  
//     },
// };

// export default loadMoreBtn;