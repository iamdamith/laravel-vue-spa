<?php

namespace Tests\Browser\Pages;

use Laravel\Dusk\Browser;

class Dashboard extends Page
{
    /**
     * Get the URL for the page.
     *
     * @return string
     */
    public function url()
    {
        return '/dashboard';
    }

    /**
     * Assert that the browser is on the page.
     *
     * @param  Browser  $browser
     * @return void
     */
    public function assert(Browser $browser)
    {
        $browser->waitForLocation($this->url())->assertPathIs($this->url());
    }

    /**
     * Get the element shortcuts for the page.
     *
     * @return array
     */
    public function elements()
    {
        return [
            '@dropdown-toggle' => '#headlessui-menu-button-1',
            '@dropdown-menu' => '.dropdown-menu.show',
        ];
    }

    /**
     * Click on the log out link.
     *
     * @param  \Laravel\Dusk\Browser $browser
     * @return void
     */
    public function clickLogout($browser)
    {
        $browser->click('@dropdown-toggle')
            // ->pause(500)
            // ->waitFor('@dropdown-menu')
            ->waitForText('Sign out')
            ->clickLink('Sign out')
            ->pause(100);
    }
}
