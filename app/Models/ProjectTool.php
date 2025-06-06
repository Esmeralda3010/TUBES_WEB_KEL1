<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class ProjectTool extends Model
{
    use HasFactory;

    protected $fillable = [
        'tool_id',
        'project_id',
    ];
}
