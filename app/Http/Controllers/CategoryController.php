<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
        return view('admin.categories.edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        //
        DB::transaction(function () use ($request, $category) {
    $validated = $request->validated();

    if ($request->hasFile('icon')) {
        $iconPath = $request->file('icon')->store('icons', 'public');
        $validated['icon'] = $iconPath;
    }

    $validated['slug'] = Str::slug($validated['name']);
    // web development => web-development
    // 1 => 1

    $Category->update($validated);
});

return redirect()->route('admin.categories.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
        dd($category);

        DB::beginTransaction();

        try {
            $category->delete();
            DB::commit();
            return redirect()->route('admin.categories.index');
        }
        catch (\Exception $e){
            DB::rollBack();
            return redirect()->route('admin.categories.index');
        }
    }
}
