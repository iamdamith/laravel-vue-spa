<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\ResetsPasswords;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
    * Create a new controller instance.
    */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
        * Get the response for a successful password reset.
        */
    protected function sendResetResponse(Request $request, string $response)
    {
        return ['status' => trans($response)];
    }

    /**
        * Get the response for a failed password reset.
        */
    protected function sendResetFailedResponse(Request $request, string $response)
    {
        return response()->json(['email' => trans($response)], 400);
    }

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;
}
