<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WalletTransaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'amount',
        'proof',
        'type',
        'is_paid',
        'bank_name',
        'bank_account_name',
        'bank_account_number',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
