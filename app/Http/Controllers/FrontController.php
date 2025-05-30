<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Project;
use Illuminate\Http\Request;

class FrontController extends Controller
{
    //
    public function index(){
        $categories = Category::all();
        $projects = Project::orderByDesc('id')->get();
        
        return view('front.index', compact('categories', 'projects')); 
    }
}
