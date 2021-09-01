<template>
    <div>
    <section class="header-main border-bottom bg-white">
        <!-- Start Navbar Area -->
        <div :class="['navbar-area', {'is-sticky': isSticky}]">
            <div class="comero-nav">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <nuxt-link class="navbar-brand" to="/">
                            <img src="../assets/img/logo.svg" alt="logo" width="100px">
                        </nuxt-link>

                        <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

                        <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                            <ul class="navbar-nav">
                                
                                <li class="nav-item p-relative"><a href="#" class="nav-link">Home <i class="fas fa-chevron-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <nuxt-link to="/" class="nav-link active">Home Style One</nuxt-link>
                                        </li>

                                        <li class="nav-item">
                                            <nuxt-link to="/diction-two" class="nav-link active">Home Style Two</nuxt-link>
                                        </li>
                                        <li class="nav-item">
                                            <nuxt-link to="/diction-three" class="nav-link active">Home Style Three</nuxt-link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item p-relative"><a href="#" class="nav-link">Shop <i class="fas fa-chevron-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><nuxt-link to="/products" class="nav-link">Products</nuxt-link></li>

                                        <li class="nav-item"><nuxt-link to="/products-details/1" class="nav-link">Products Details</nuxt-link></li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <nuxt-link to="/gallery-one" class="nav-link">Gallery</nuxt-link>
                                </li>

                                <li class="nav-item p-relative"><a href="#" class="nav-link">Pages <i class="fas fa-chevron-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <nuxt-link to="/gallery-one" class="nav-link">Gallery</nuxt-link>
                                        </li>

                                        <li class="nav-item">
                                            <nuxt-link to="/cart" class="nav-link">Cart</nuxt-link>
                                        </li>

                                        <li class="nav-item">
                                            <nuxt-link to="/checkout" class="nav-link">Checkout</nuxt-link>
                                        </li>

                                        <li class="nav-item">
                                            <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
                                        </li>

                                        <li class="nav-item">
                                            <nuxt-link to="/signup" class="nav-link">Signup</nuxt-link>
                                        </li>

                                        <li class="nav-item">
                                            <nuxt-link to="/not-found" class="nav-link">Error 404</nuxt-link>
                                        </li>

                                        <li class="nav-item">
                                            <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item p-relative"><a href="#" class="nav-link">Blog <i class="fas fa-chevron-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><nuxt-link to="/blog-one" class="nav-link">Blog Grid</nuxt-link></li>

                                        <li class="nav-item"><nuxt-link to="/blog-details" class="nav-link">Blog Details</nuxt-link></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                <nuxt-link to="/contact" class="nav-link">News</nuxt-link>
                                </li>
                                 <li class="nav-item">
                                <nuxt-link to="/contact" class="nav-link">More News</nuxt-link>
                                </li>
                                 <li class="nav-item">
                                <nuxt-link to="/contact" class="nav-link"> Extra News</nuxt-link>
                                </li>

                                <li class="nav-item">
                                <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
                                </li>
                                 </ul>
                                  <form class="d-flex form-inputs">
                                  <input class="form-control me-2" type="search" placeholder="Search any product..." aria-label="Search"><i class="bx bx-search"></i> 
                                </form>
                             <div class="others-option">
                                <div class="option-item">
                                    <nuxt-link to="/login">Login</nuxt-link>
                                </div>
                                <div class="option-item">
                                     <a class="qty" @click.prevent="toggle" href="#">
                                        {{cart.length}} <i class="bx bxs-shopping-bag"></i>
                                    </a>
                                </div>
                            </div>
                        </b-collapse>
                    </nav>
                </div>
            </div>
            </div>
        
            </section>

        <SidebarPanel></SidebarPanel>
        </div>
        <!-- End Navbar Area -->


</template>

<script>
import SidebarPanel from '../layouts/SidebarPanel';
import { mutations } from '../utils/sidebar-util';
export default {
    components: {
        SidebarPanel
    },
    data(){
        return {
            isSticky: false
        }
    },
    mounted(){
        const that = this;
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            if(scrollPos >= 100){
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        })
    },
    computed: {
        cart(){
            return this.$store.getters.cart
        }
    },
    methods: {
        toggle() {
            mutations.toggleNav()
        }
    }
}
</script>
<style lang="scss" scoped>
#navbarSupportedContent > div > div:nth-child(2) > a > i {
    font-size: 24px;
    color:rgb(56, 192, 56);
}
.form-inputs {
    position: relative
}

.form-inputs .form-control {
    height: 45px
}

.form-inputs .form-control:focus {
    box-shadow: none;
    border: 1px solid rgb(216, 216, 228);
}

.form-inputs i {
    position: absolute;
    right: 10px;
    top: 15px
}
</style>
