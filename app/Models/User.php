<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles, HasApiTokens;

    /**
     * The attributes that are mass assignable.
    *
     * @var list<string>
     */
    protected $fillable = [
        'avatar',
        'occupation',
        'connect',
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function wallet(){
        return $this->hasOne(Wallet::class);
    }

    public function projects(){
        return $this->hasMany(Project::class, 'client_id', 'id')->orderByDesc('id');
        //$user->projects() ... menampilkan project dari user tersebut
    }

    public function proposals(){
        return $this->hasMany(ProjectApplicant::class, 'freelancer_id', 'id')->orderByDesc('id');
    }

    public function hasAppliedToProject($projectId){
        return ProjectApplicant::where('project_id', $projectId)
        ->where('freelancer_id', $this->id)
        ->exists(); //true or false
    }

}
