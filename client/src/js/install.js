const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event (Pre-installation)
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the triggered events
    window.deferredPrompt = event;
    // Remove the hidden class from the button
    butInstall.classList.toggle('hidden', false);
});

// Implement a click event handler on the `butInstall` element (During Installation)
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    // If there are no triggered events, function returns early and installation cancels
    if(!promptEvent) {
        return;
    }
    // Show prompt
    promptEvent.prompt();
    // Reset the deferred prompt variable - it can only be used once.
    window.deferredPrompt = null;
    // Add the hidden class to the button
    butInstall.classList.toggle('hidden', true);
});

// Add an handler for the `appinstalled` event (Post-installation)
window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    window.deferredPrompt = null;
});
