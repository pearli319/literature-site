<template>
    <div>
        <Navbar />
        <!-- Masthead -->
        <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">

                <!-- Masthead Avatar Image -->
                <img class="masthead-avatar mb-5" src="../assets/avataaars.svg" alt="">

                <!-- Masthead Heading -->
                <h1 class="masthead-heading text-uppercase mb-0">Twentieth-century English Literature</h1>

                <!-- Icon Divider -->
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                </div>

                <!-- Masthead Subheading -->
                <p class="masthead-subheading font-weight-light mb-0">Language - Frontend - Literature</p>

            </div>
        </header>

        <Authors />

        <!-- About Section -->
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">

                <!-- About Section Heading -->
                <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>

                <!-- Icon Divider -->
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                </div>

                <!-- About Section Content -->
                <div class="row">
                    <div class="col-lg-4 ml-auto">
                        <p class="lead">This is a literature website which is about four authors in 20th century: Conrad,
                            Orwell, Woolf and Yeats. You can click the pictures to see the authors' introduction and some of
                            works.
                        </p>
                    </div>
                    <div class="col-lg-4 mr-auto">
                        <p class="lead">After watching all the authors, you can click the game picture to play "Who Wants to
                            Be a Millionaire?" to examine whether you undersrand the authors or not. There are 12 questions
                            and each question has 4 options. Choose 1 correct answer and get money to be a millionaire. You
                            can find all the answers in this website, just enjoy yourself!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="page-section" id="contact">
            <div class="container">

                <!-- Contact Section Heading -->
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>

                <!-- Icon Divider -->
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                </div>

                <!-- Contact Section Form -->
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <input class="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name.">
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input class="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address.">
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Phone Number</label>
                                    <input class="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number.">
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Message</label>
                                    <textarea class="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <br>
                            <div id="success"></div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>

        <!-- Footer -->
        <footer class="footer text-center">
            <div class="container">
                <div class="row">

                    <!-- Footer Location -->
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">Nation Taiwan University</p>
                    </div>

                    <!-- Footer Social Icons -->
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Around Web Author</h4>
                        <a class="btn btn-outline-light btn-social mx-1"
                            href="https://www.facebook.com/profile.php?id=100009117105250" target="_blank">
                            <i class="fab fa-fw fa-facebook-f"></i>
                        </a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/pearli319"
                            target="_blank">
                            <i class="fab fa-fw fa-github"></i>
                        </a>
                    </div>

                    <!-- Footer About Text -->
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">About the Web</h4>
                        <p class="lead mb-0">This website uses Freelance which is a free to use, MIT licensed Bootstrap
                            theme created by <a href="http://startbootstrap.com">Start Bootstrap</a>.
                        </p>
                    </div>

                </div>
            </div>
        </footer>

        <Footer />

        <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
        <div class="scroll-to-top d-lg-none position-fixed ">
            <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
                <i class="fa fa-chevron-up"></i>
            </a>
        </div>

    </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'
import Authors from './Authors'

export default {
    components: {
        Navbar,
        Footer,
        Authors
    },
}
</script>